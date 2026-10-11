import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";


export async function GET() {
  try {
    await prisma.$queryRaw`SELECT 1`;

    return NextResponse.json(
      {
        success: true,
        message: "Database connection successful",
        database: "MySQL",
        orm: "Prisma",
        timestamp: new Date().toISOString(),
      },
      { status: 200 },
    );
  } catch (error) {
    // Log server-side details for debugging; never expose them to clients.
    console.error("Database health check failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Database connection failed",
      },
      { status: 503 },
    );
  }
}
