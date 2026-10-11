import { NextRequest, NextResponse } from "next/server";
import { randomBytes } from "node:crypto";
import bcrypt from "bcryptjs";
// import { prisma } from "@/lib/prisma";
// import { SESSION_COOKIE_NAME, hashSessionToken } from "@/lib/auth/session";
import { prisma } from "../../../../../lib/prisma";
import { hashSessionToken, SESSION_COOKIE_NAME } from "../../../../../lib/auth/session";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SESSION_DURATION_SECONDS = 7 * 24 * 60 * 60;

export async function POST(request: NextRequest) {
  try {
    // 1. Parse and validate the request body
    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid JSON request.",
        },
        { status: 400 },
      );
    }

    if (
      typeof body !== "object" ||
      body === null ||
      !("email" in body) ||
      !("password" in body)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Email and password are required.",
        },
        { status: 400 },
      );
    }

    const { email, password } = body as {
      email: unknown;
      password: unknown;
    };

    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      !email.trim() ||
      !password ||
      email.length > 254 ||
      password.length > 1024
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email and password.",
        },
        { status: 400 },
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    // 2. Find the user in MySQL through Prisma
    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
      select: {
        id: true,
        name: true,
        email: true,
        passwordHash: true,
        emailVerified: true,
        role: true,
        isActive: true,
      },
    });

    // 3. Verify credentials without revealing whether the email exists
    if (
      !user ||
      !user.passwordHash ||
      !(await bcrypt.compare(password, user.passwordHash))
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password.",
        },
        { status: 401 },
      );
    }

    // 4. Reject disabled accounts
    if (!user.isActive) {
      return NextResponse.json(
        {
          success: false,
          message: "This account is disabled.",
        },
        { status: 403 },
      );
    }

    // 5. Require email verification
    if (!user.emailVerified) {
      return NextResponse.json(
        {
          success: false,
          code: "EMAIL_NOT_VERIFIED",
          message: "Please verify your email before logging in.",
        },
        { status: 403 },
      );
    }

    // 6. Generate a cryptographically secure session token
    const sessionToken = randomBytes(32).toString("hex");
    const tokenHash = hashSessionToken(sessionToken);

    const expiresAt = new Date(Date.now() + SESSION_DURATION_SECONDS * 1000);

    // 7. Save only the token hash in MySQL
    await prisma.session.create({
      data: {
        tokenHash,
        userId: user.id,
        expiresAt,
      },
    });

    // 8. Create the response
    const response = NextResponse.json(
      {
        success: true,
        message: "Login successful.",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        redirectTo: user.role === "ADMIN" ? "/admin" : "/dashboard",
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );

    // 9. Set a secure HTTP-only session cookie
    response.cookies.set({
      name: SESSION_COOKIE_NAME,
      value: sessionToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: expiresAt,
    });

    return response;
  } catch (error) {
    console.error("Login API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred.",
      },
      { status: 500 },
    );
  }
}
