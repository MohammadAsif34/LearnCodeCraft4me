"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Code2,
  MailCheck,
  CheckCircle2,
  XCircle,
  LoaderCircle,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import BackgroundUI from "@/components/ui/BackgroundUI";

type Status = "verifying" | "success" | "error" | "missing";

export default function VerifyEmailPage() {
  const [status, setStatus] = useState<Status>("verifying");
  const [message, setMessage] = useState("Checking your verification link...");
  const [email, setEmail] = useState("");
  const [resending, setResending] = useState(false);
  const [resendMessage, setResendMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (!token) {
      setStatus("missing");
      setMessage("Your verification link is missing its token.");
      return;
    }

    const controller = new AbortController();

    async function verifyEmail() {
      try {
        const response = await fetch("/api/auth/verify-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
          signal: controller.signal,
        });

        const data = await response.json();

        if (!response.ok) {
          setStatus("error");
          setMessage(
            data.message || "This verification link is invalid or expired.",
          );
          return;
        }

        setStatus("success");
        setMessage("Your email address has been verified successfully.");
      } catch {
        if (!controller.signal.aborted) {
          setStatus("error");
          setMessage("Unable to verify your email. Please try again.");
        }
      }
    }

    void verifyEmail();

    return () => controller.abort();
  }, []);

  async function handleResend() {
    if (!email.trim()) {
      setResendMessage("Enter your email address first.");
      return;
    }

    setResending(true);
    setResendMessage("");

    try {
      const response = await fetch("/api/auth/resend-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        setResendMessage(
          data.message || "Unable to send a verification email right now.",
        );
        return;
      }

      setResendMessage(
        "If your account needs verification, an email will be sent shortly.",
      );
    } catch {
      setResendMessage("Connection failed. Please try again.");
    } finally {
      setResending(false);
    }
  }

  const cardClass =
    "rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-slate-900/90 dark:shadow-black/30 sm:p-9";

  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden bg-slate-50 px-4 py-10 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <BackgroundUI />

      <section className="relative z-10 w-full max-w-md">
        {/* Brand */}
        <Link
          href="/"
          aria-label="LearnCodeCraft4me home"
          className="mb-8 flex items-center justify-center gap-3"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 dark:bg-indigo-500">
            <Code2 size={27} strokeWidth={2.5} />
          </span>

          <span className="text-2xl font-bold tracking-tight">
            LearnCode
            <span className="text-indigo-600 dark:text-indigo-400">
              Craft4me
            </span>
          </span>
        </Link>

        <div className={cardClass}>
          {/* Status icon */}
          <div className="mb-6 flex justify-center">
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl border ${
                status === "success"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400"
                  : status === "error" || status === "missing"
                    ? "border-red-200 bg-red-50 text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400"
                    : "border-indigo-200 bg-indigo-50 text-indigo-600 dark:border-indigo-400/20 dark:bg-indigo-400/10 dark:text-indigo-400"
              }`}
            >
              {status === "verifying" ? (
                <LoaderCircle size={32} className="animate-spin" />
              ) : status === "success" ? (
                <CheckCircle2 size={32} />
              ) : status === "error" || status === "missing" ? (
                <XCircle size={32} />
              ) : (
                <MailCheck size={32} />
              )}
            </div>
          </div>

          <div className="text-center">
            <p className="mb-3 inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:border-indigo-400/20 dark:bg-indigo-400/10 dark:text-indigo-300">
              EMAIL VERIFICATION
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {status === "verifying"
                ? "Verifying your email"
                : status === "success"
                  ? "Email verified!"
                  : status === "missing"
                    ? "Missing verification link"
                    : "Verification failed"}
            </h1>

            <p
              role="status"
              aria-live="polite"
              className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400"
            >
              {message}
            </p>
          </div>

          {status === "verifying" && (
            <p className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
              Please keep this page open while we check your link.
            </p>
          )}

          {status === "success" && (
            <Link
              href="/login"
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus:ring-offset-slate-900"
            >
              Continue to sign in
              <ArrowRight size={18} />
            </Link>
          )}

          {(status === "error" || status === "missing") && (
            <div className="mt-7 space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-indigo-400"
                />
              </div>

              <button
                type="button"
                onClick={handleResend}
                disabled={resending}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-indigo-500 dark:hover:bg-indigo-400"
              >
                {resending ? "Sending..." : "Resend verification email"}
                {!resending && <ArrowRight size={18} />}
              </button>

              {resendMessage && (
                <p
                  role="status"
                  aria-live="polite"
                  className="text-center text-sm text-slate-600 dark:text-slate-400"
                >
                  {resendMessage}
                </p>
              )}

              <p className="text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
                For your security, the response will not reveal whether an
                account exists.
              </p>
            </div>
          )}

          <Link
            href="/login"
            className="mt-7 flex items-center justify-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
          >
            <ArrowLeft size={16} />
            Back to sign in
          </Link>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          LearnCodeCraft4me · Keep learning.
        </p>
      </section>
    </main>
  );
}
