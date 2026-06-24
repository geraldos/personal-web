import { BriefcaseBusiness, Landmark, MapPin, PanelsTopLeft } from "lucide-react";

import { StackPills } from "../../../shared/components/StackPills";
import type { ExperienceContent } from "../experienceContent";
import { experienceStacks } from "../homeData";

export function ExperienceSection({ content }: { content: ExperienceContent }) {
  return (
    <section id="experience" className="border-y border-paper/15 bg-ink px-5 py-24 text-paper md:px-10 md:py-36">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-acid">
              <BriefcaseBusiness size={16} aria-hidden="true" /> {content.eyebrow}
            </p>
            <h2 className="font-display text-4xl font-bold uppercase leading-none tracking-[-0.06em] sm:text-5xl lg:text-8xl">
              {content.titleTop}
              <span className="block text-paper/25">{content.titleBottom}</span>
            </h2>
          </div>
          <p className="max-w-xl border-t border-paper/15 pt-6 text-sm leading-relaxed text-paper/60 lg:col-span-4 lg:col-start-9">
            {content.description}
          </p>
        </div>

        <ol className="relative mt-16 ml-2 grid gap-8 border-l border-paper/20 pl-8 md:ml-4 md:pl-12">
          {content.roles.map((role, index) => (
            <li key={`${role.company}-${role.period}`} className="relative">
              <span className="absolute -left-[3.15rem] top-6 flex h-10 w-10 items-center justify-center rounded-full border-4 border-ink bg-acid text-ink shadow-[0_8px_20px_rgb(0_0_0_/_0.2)] md:-left-[3.9rem]">
                {index === 0 ? <Landmark size={17} aria-hidden="true" /> : <PanelsTopLeft size={17} aria-hidden="true" />}
              </span>
              <article className="rounded-3xl border border-paper/15 bg-ink/70 p-6 pr-16 transition duration-300 hover:border-acid/70 sm:pr-6 md:p-8">
                <div className="flex flex-col gap-5 border-b border-paper/15 pb-6 md:flex-row md:items-start md:justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-acid">0{index + 1} / {content.roles.length}</span>
                    <h3 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">{role.role}</h3>
                  </div>
                  <span className="w-fit rounded-full border border-paper/20 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-paper/70">
                    {role.period}
                  </span>
                </div>
                <div className="mt-6">
                  <p className="font-display text-xl font-bold md:text-2xl">{role.company}</p>
                  <p className="mt-2 flex items-center gap-2 text-sm text-paper/55">
                    <MapPin size={15} className="shrink-0 text-acid" aria-hidden="true" /> {role.location}
                  </p>
                </div>
                <ul className="mt-7 grid gap-3 text-sm leading-relaxed text-paper/70">
                  {role.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-paper/15 pt-6">
                  <StackPills stacks={experienceStacks[index]} />
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
