import {
  ArrowDownRight,
  ArrowUpRight,
  Asterisk,
  Braces,
  Code2,
  Github,
  Linkedin,
  Mail,
  MoveUpRight,
  Sparkles,
  Terminal,
} from "lucide-react";
import {
  SiExpress,
  SiFastify,
  SiJavascript,
  SiMui,
  SiNodedotjs,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Vue", icon: SiVuedotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Material UI", icon: SiMui },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Fastify", icon: SiFastify },
  { name: "Express", icon: SiExpress },
  { name: "Spring Boot", icon: SiSpringboot },
];

const projects = [
  {
    number: "01",
    title: "Frontend Experiences",
    description:
      "Building polished, responsive interfaces that balance product goals, performance, and maintainable code.",
    tags: ["React", "Vue", "UI Engineering"],
    color: "bg-acid text-ink",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Full-stack Systems",
    description:
      "Connecting thoughtful frontends to reliable backend services to deliver complete, scalable applications.",
    tags: ["Node.js", "Spring Boot", "API"],
    color: "bg-orange text-ink",
    icon: Code2,
  },
  {
    number: "03",
    title: "Learning Experiments",
    description:
      "Exploring new technologies through focused prototypes, technical research, and deliberate experimentation.",
    tags: ["AI", "Prototypes", "Research"],
    color: "bg-paper text-ink",
    icon: Braces,
  },
];

function Logo() {
  return (
    <a href="#top" aria-label="Geraldo home" className="group flex items-center gap-3">
      <svg viewBox="0 0 52 52" className="h-11 w-11" aria-hidden="true">
        <rect x="1" y="1" width="50" height="50" rx="14" fill="#c7ff32" />
        <path
          d="M35.5 18.5A13 13 0 1 0 38 31H28v-7h16v20h-7v-5.5A19 19 0 1 1 40.5 14z"
          fill="#0a0a09"
        />
      </svg>
      <span className="font-display text-sm font-bold uppercase leading-none tracking-tight">
        Geraldo
        <br />
        <span className="text-acid">Full-stack Engineer</span>
      </span>
    </a>
  );
}

function SkillMarquee() {
  const SkillList = () => (
    <div className="flex shrink-0 items-center">
      {skills.map(({ name, icon: Icon }) => (
        <div
          key={name}
          className="flex items-center gap-3 border-r border-ink/25 px-6 md:px-10"
        >
          <Icon className="h-7 w-7 md:h-10 md:w-10" aria-hidden="true" />
          <span className="font-display text-sm font-bold uppercase tracking-tight md:text-xl">
            {name}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div
      className="overflow-hidden border-y border-ink bg-acid py-4 text-ink md:py-5"
      aria-label="Technology stack"
    >
      <div className="ticker flex w-max">
        <SkillList />
        <SkillList />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top" className="overflow-hidden">
      <div className="noise" />

      <nav className="fixed inset-x-0 top-0 z-40 border-b border-paper/15 bg-ink/80 px-5 py-4 backdrop-blur-xl md:px-10">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between">
          <Logo />
          <div className="hidden items-center gap-8 text-xs uppercase tracking-widest md:flex">
            <a className="transition hover:text-acid" href="#about">
              About
            </a>
            <a className="transition hover:text-acid" href="#work">
              What I Do
            </a>
            <a className="transition hover:text-acid" href="#contact">
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full border border-paper/30 px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition hover:border-acid hover:bg-acid hover:text-ink md:text-xs"
          >
            Let&apos;s talk <ArrowUpRight size={14} />
          </a>
        </div>
      </nav>

      <section className="grid-lines relative min-h-screen px-5 pb-16 pt-32 md:px-10 md:pt-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-paper/55 md:text-xs">
            <span>Jakarta, Indonesia</span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-acid" />
              Open to build something meaningful
            </span>
          </div>

          <div className="relative">
            <p className="mb-3 font-display text-lg font-bold uppercase text-acid md:text-2xl">
              Hello, I&apos;m Geraldo.
            </p>
            <h1 className="font-display text-[17vw] font-bold uppercase leading-[0.75] tracking-[-0.085em] md:text-[13vw]">
              Full-stack
            </h1>
            <div className="flex items-center">
              <h1 className="outline-text font-display text-[17vw] font-bold uppercase leading-[0.82] tracking-[-0.085em] md:text-[13vw]">
                Engineer
              </h1>
              <Asterisk
                className="spin-slow ml-4 hidden h-20 w-20 text-acid md:block lg:h-32 lg:w-32"
                strokeWidth={1.2}
              />
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-5 md:col-start-7">
                <p className="max-w-xl text-base leading-relaxed text-paper/70 md:text-lg">
                  A full-stack engineer with a strong frontend focus, building
                  production-ready digital products since November 2020.
                </p>
              </div>
              <div className="flex gap-3 md:col-span-2 md:justify-end">
                <a
                  href="#work"
                  className="group flex h-16 w-16 items-center justify-center rounded-full bg-acid text-ink transition hover:scale-110 md:h-20 md:w-20"
                  aria-label="See what I do"
                >
                  <ArrowDownRight className="transition group-hover:rotate-[-45deg]" />
                </a>
              </div>
            </div>

            <div className="mt-14 grid max-w-xl grid-cols-2 border-y border-paper/20 py-5 text-xs uppercase tracking-wider md:ml-auto">
              <div>
                <span className="block text-paper/40">Experience</span>
                <strong className="mt-2 block font-display text-2xl text-acid">
                  5+ Years
                </strong>
              </div>
              <div className="border-l border-paper/20 pl-6">
                <span className="block text-paper/40">Primary focus</span>
                <strong className="mt-2 block font-display text-2xl">Frontend</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="float absolute right-[-40px] top-[24%] hidden rotate-6 border border-paper/20 bg-ink p-4 text-xs uppercase tracking-wider text-paper/60 lg:block">
          <Terminal className="mb-8 text-acid" />
          <span>Current mode:</span>
          <br />
          <strong className="text-paper">Building with intent</strong>
        </div>
      </section>

      <SkillMarquee />

      <section id="about" className="bg-paper px-5 py-24 text-ink md:px-10 md:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]">
                <span className="h-2 w-2 bg-orange" /> About me
              </p>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-display text-4xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
                FULL-STACK BY EXPERIENCE.
                <span className="block text-ink/25">FRONTEND BY INSTINCT.</span>
              </h2>
              <div className="mt-12 grid gap-8 border-t border-ink/20 pt-8 md:grid-cols-2">
                <p className="leading-relaxed text-ink/65">
                  I began my professional journey in November 2020. Working across
                  the stack has given me a practical understanding of how complete
                  products are designed, built, and maintained.
                </p>
                <p className="leading-relaxed text-ink/65">
                  Frontend engineering remains my primary focus, where architecture,
                  visual detail, performance, and user experience come together.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 grid border-y border-ink/20 sm:grid-cols-3">
            {[
              ["01", "Think clearly", "Understanding the problem before committing to a solution."],
              ["02", "Build thoughtfully", "Writing maintainable code with attention to every detail."],
              ["03", "Learn continuously", "Staying adaptable through deliberate, hands-on learning."],
            ].map(([num, title, copy]) => (
              <div
                key={num}
                className="border-b border-ink/20 py-8 sm:border-b-0 sm:border-r sm:px-8 first:pl-0 last:border-r-0"
              >
                <span className="text-xs font-bold text-orange">{num}</span>
                <h3 className="mt-8 font-display text-2xl font-bold uppercase">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/55">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-acid">
                What I do
              </p>
              <h2 className="font-display text-5xl font-bold uppercase leading-none tracking-[-0.06em] md:text-8xl">
                Ways I Create.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-paper/50">
              The areas where my experience, technical judgment, and curiosity create
              the most value.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article
                  key={project.number}
                  className={`project-card relative min-h-[430px] overflow-hidden rounded-[2rem] p-7 transition duration-500 hover:-translate-y-2 ${project.color}`}
                >
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <span className="text-xs font-bold">{project.number} / 03</span>
                      <Icon size={34} strokeWidth={1.5} />
                    </div>
                    <div className="mt-auto">
                      <h3 className="font-display text-4xl font-bold uppercase leading-none tracking-[-0.05em]">
                        {project.title}
                      </h3>
                      <p className="mt-5 text-sm leading-relaxed opacity-65">
                        {project.description}
                      </p>
                      <div className="mt-8 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-current px-3 py-1 text-[10px] font-bold uppercase"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-paper/15 bg-[#11110f] px-5 py-24 md:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-orange">
                How I work
              </p>
              <h2 className="font-display text-4xl font-bold uppercase leading-none tracking-[-0.05em] md:text-6xl">
                End-to-end context.
                <br />
                <span className="text-paper/25">Frontend precision.</span>
              </h2>
            </div>
            <div className="grid gap-8 border-t border-paper/15 pt-8 md:col-span-7 md:grid-cols-2">
              <p className="text-sm leading-relaxed text-paper/55">
                My full-stack background allows me to make frontend decisions with
                a clear understanding of APIs, backend constraints, and the broader
                product architecture.
              </p>
              <p className="text-sm leading-relaxed text-paper/55">
                I focus on building interfaces that are accessible, performant,
                maintainable, and genuinely useful to the people using them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="relative bg-acid px-5 pb-8 pt-24 text-ink md:px-10 md:pt-36">
        <div className="mx-auto max-w-[1500px]">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em]">Have an idea?</p>
          <a href="mailto:hello@geraldo.dev" className="group block">
            <h2 className="font-display text-[15vw] font-bold uppercase leading-[0.75] tracking-[-0.085em] transition group-hover:tracking-[-0.06em] md:text-[12vw]">
              Let&apos;s Make
              <span className="flex items-center">
                It Real <MoveUpRight className="ml-4 h-[10vw] w-[10vw]" strokeWidth={1.2} />
              </span>
            </h2>
          </a>

          <div className="mt-24 grid gap-8 border-t border-ink/25 pt-8 text-xs uppercase tracking-wider md:grid-cols-3">
            <div>
              <span className="block text-ink/45">Contact</span>
              <a
                className="mt-2 inline-flex items-center gap-2 font-bold hover:underline"
                href="mailto:hello@geraldo.dev"
              >
                <Mail size={14} /> hello@geraldo.dev
              </a>
            </div>
            <div className="flex gap-5 md:justify-center">
              <a aria-label="GitHub" href="#" className="transition hover:scale-125">
                <Github size={20} />
              </a>
              <a aria-label="LinkedIn" href="#" className="transition hover:scale-125">
                <Linkedin size={20} />
              </a>
            </div>
            <div className="md:text-right">
              <span className="block text-ink/45">Designed & built with intention</span>
              <span className="mt-2 block font-bold">Geraldo © 2026</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
