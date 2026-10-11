import Link from "next/link";

const courses = [
  {
    title: "HTML & CSS",
    subtitle: "Build your first website",
    description:
      "Learn page structure, styling, responsive layouts, and the foundations of web design.",
    level: "Beginner",
    lessons: "Start with the basics",
    icon: "🌐",
    color:
      "border-orange-200 bg-orange-50 dark:border-orange-400/20 dark:bg-orange-400/10",
    iconColor: "bg-orange-100 dark:bg-orange-400/15",
    href: "/courses/html-css",
  },
  {
    title: "JavaScript",
    subtitle: "Make websites interactive",
    description:
      "Understand variables, functions, events, arrays, and the logic behind dynamic websites.",
    level: "Beginner",
    lessons: "Learn step by step",
    icon: "⚡",
    color:
      "border-amber-200 bg-amber-50 dark:border-amber-400/20 dark:bg-amber-400/10",
    iconColor: "bg-amber-100 dark:bg-amber-400/15",
    href: "/courses/javascript",
  },
  {
    title: "Python",
    subtitle: "Learn programming fundamentals",
    description:
      "Explore variables, loops, functions, and problem-solving with beginner-friendly examples.",
    level: "Beginner",
    lessons: "Practice as you learn",
    icon: "🐍",
    color: "border-sky-200 bg-sky-50 dark:border-sky-400/20 dark:bg-sky-400/10",
    iconColor: "bg-sky-100 dark:bg-sky-400/15",
    href: "/courses/python",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose a learning path",
    description:
      "Pick a language or topic that matches your interests and goals.",
  },
  {
    number: "02",
    title: "Learn through examples",
    description:
      "Understand coding concepts with simple explanations and examples.",
  },
  {
    number: "03",
    title: "Practice and build",
    description:
      "Turn your knowledge into practical skills with coding exercises and projects.",
  },
];

export default function HomePage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-white">
      {/* Hero background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-indigo-400/15 blur-3xl dark:bg-indigo-500/15" />
        <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl dark:bg-cyan-500/10" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)]" />
      </div>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:px-8 lg:py-32">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm dark:border-indigo-400/20 dark:bg-slate-900/70 dark:text-indigo-300">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            Your coding journey starts here
          </div>

          <h1 className="mt-7 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Learn to code.
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-cyan-300">
              Build your future.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            Start from zero, learn at your own pace, and develop real
            programming skills with beginner-friendly tutorials and practical
            examples.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700"
            >
              Start Learning
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/courses"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/70 px-6 py-3.5 font-semibold text-slate-700 transition hover:border-indigo-300 hover:bg-white dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-indigo-400/50 dark:hover:bg-slate-900"
            >
              Explore Courses
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600 dark:text-slate-400">
            <span>✓ Beginner-friendly</span>
            <span>✓ Learn at your pace</span>
            <span>✓ Build practical skills</span>
          </div>
        </div>

        {/* Code preview */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-500/15 to-cyan-400/15 blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-2xl shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-900/95 dark:shadow-black/30">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-700">
              <div className="flex gap-2" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                hello-world.ts
              </span>
            </div>

            <div className="overflow-x-auto p-5 font-mono text-sm leading-8 sm:p-7 sm:text-base">
              <p className="text-slate-400">
                <span className="mr-5 text-slate-400">01</span>
                <span className="text-indigo-600 dark:text-indigo-400">
                  function
                </span>{" "}
                <span className="text-cyan-700 dark:text-cyan-300">
                  startJourney
                </span>
                () {"{"}
              </p>
              <p className="whitespace-nowrap pl-5 text-slate-700 dark:text-slate-300">
                <span className="mr-5 text-slate-400">02</span>
                const goal ={" "}
                <span className="text-emerald-700 dark:text-emerald-300">
                  "learn to code"
                </span>
                ;
              </p>
              <p className="whitespace-nowrap pl-5 text-slate-700 dark:text-slate-300">
                <span className="mr-5 text-slate-400">03</span>
                const practice ={" "}
                <span className="text-emerald-700 dark:text-emerald-300">
                  "every day"
                </span>
                ;
              </p>
              <p className="mt-2 whitespace-nowrap pl-5 text-slate-700 dark:text-slate-300">
                <span className="mr-5 text-slate-400">04</span>
                return goal +{" "}
                <span className="text-emerald-700 dark:text-emerald-300">
                  " + "
                </span>{" "}
                + practice;
              </p>
              <p className="text-slate-400">
                <span className="mr-5 text-slate-400">05</span>
                {"}"}
              </p>

              <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm dark:border-emerald-400/20 dark:bg-emerald-400/10">
                <span className="text-emerald-700 dark:text-emerald-300">
                  ✓ Every expert was once a beginner.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section
        id="courses"
        className="border-y border-slate-200/80 bg-white/60 py-20 dark:border-slate-800 dark:bg-slate-900/30 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
              Explore your options
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Choose your first language
            </h2>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
              Start with the fundamentals and build your skills one concept at a
              time.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <article
                key={course.title}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-950/5 dark:border-slate-800 dark:bg-slate-950/70 dark:hover:border-indigo-400/40 dark:hover:shadow-black/20"
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${course.iconColor}`}
                  >
                    {course.icon}
                  </div>
                  <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300">
                    {course.level}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold">{course.title}</h3>
                <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {course.subtitle}
                </p>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {course.description}
                </p>

                <div className="mt-6 border-t border-slate-200 pt-5 dark:border-slate-800">
                  <p className="mb-4 text-xs text-slate-500 dark:text-slate-400">
                    {course.lessons}
                  </p>
                  <Link
                    href={course.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400"
                  >
                    Explore course <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold transition hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
            >
              View all courses <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Learning process */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            Simple learning process
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            From beginner to builder
          </h2>
          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
            A straightforward way to make progress without feeling overwhelmed.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-white/70 p-7 dark:border-slate-800 dark:bg-slate-900/50"
            >
              <span className="inline-flex rounded-xl bg-indigo-100 px-3 py-2 font-mono text-sm font-bold text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-300">
                {step.number}
              </span>
              <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-indigo-800 px-6 py-14 text-center shadow-xl shadow-indigo-950/15 sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border-[40px] border-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border-[40px] border-white/10"
          />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">
              Your next chapter starts now
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to write your first line of code?
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-indigo-100">
              Create your free account and take the first step toward building
              something amazing.
            </p>
            <Link
              href="/register"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-indigo-700 transition hover:-translate-y-0.5 hover:bg-indigo-50"
            >
              Create Your Account <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
