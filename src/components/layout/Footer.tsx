"use cache";
import Link from "next/link";

const footerLinks = {
  Learn: [
    { label: "Courses", href: "/courses" },
    { label: "Tutorials", href: "/tutorials" },
    { label: "Learning Paths", href: "/learning-paths" },
  ],
  Languages: [
    { label: "HTML & CSS", href: "/courses/html-css" },
    { label: "JavaScript", href: "/courses/javascript" },
    { label: "Python", href: "/courses/python" },
  ],
  Account: [
    { label: "Login", href: "/login" },
    { label: "Create Account", href: "/register" },
    { label: "Verify Email", href: "/verify-email" },
  ],
  Support: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

export default async function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.08),transparent_45%)] dark:bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.12),transparent_45%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-6 pt-14 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-xl font-bold text-white shadow-lg shadow-indigo-600/20">
                L
              </span>

              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                LearnCode
                <span className="text-indigo-600 dark:text-indigo-400">
                  Craft4me
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-400">
              Learn to code, build real projects, and grow your skills one step
              at a time. Your coding journey starts here.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700 dark:border-indigo-400/20 dark:bg-indigo-400/10 dark:text-indigo-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Learn. Practice. Create.
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                {title}
              </h3>

              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} LearnCodeCraft4me. All rights reserved.
          </p>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Built for curious minds and future developers.
          </p>
        </div>
      </div>
    </footer>
  );
}
