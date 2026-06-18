import { ArrowDownRight, Asterisk, Terminal } from "lucide-react";

import type { HomeContent } from "../homeContent";

export function HeroSection({
  content,
  yearsOfExperience,
}: {
  content: HomeContent["hero"];
  yearsOfExperience: number;
}) {
  return (
    <section className="grid-lines relative min-h-screen px-5 pb-16 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-8 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-paper/55 md:text-xs">
          <span>{content.location}</span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-acid" />
            {content.availability}
          </span>
        </div>

        <div className="relative">
          <p className="mb-3 font-display text-lg font-bold uppercase text-acid md:text-2xl">
            {content.intro}
          </p>
          <h1 className="font-display text-[17vw] font-bold uppercase leading-[0.75] tracking-[-0.085em] md:text-[13vw]">
            {content.titleTop}
          </h1>
          <div className="flex items-center">
            <h1 className="outline-text font-display text-[17vw] font-bold uppercase leading-[0.82] tracking-[-0.085em] md:text-[13vw]">
              {content.titleBottom}
            </h1>
            <Asterisk
              className="spin-slow ml-4 hidden h-20 w-20 text-acid md:block lg:h-32 lg:w-32"
              strokeWidth={1.2}
            />
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-5 md:col-start-7">
              <p className="max-w-xl text-base leading-relaxed text-paper/70 md:text-lg">
                {content.description}
              </p>
            </div>
            <div className="flex gap-3 md:col-span-2 md:justify-end">
              <a
                href="#work"
                className="group flex h-16 w-16 items-center justify-center rounded-full bg-acid text-ink transition hover:scale-110 md:h-20 md:w-20"
                aria-label={content.workLinkLabel}
              >
                <ArrowDownRight className="transition group-hover:rotate-[-45deg]" />
              </a>
            </div>
          </div>

          <div className="mt-14 grid max-w-xl grid-cols-2 border-y border-paper/20 py-5 text-xs uppercase tracking-wider md:ml-auto">
            <div>
              <span className="block text-paper/40">{content.experienceLabel}</span>
              <strong className="mt-2 block font-display text-2xl text-acid">
                {yearsOfExperience}+ {content.yearsSuffix}
              </strong>
            </div>
            <div className="border-l border-paper/20 pl-6">
              <span className="block text-paper/40">{content.focusLabel}</span>
              <strong className="mt-2 block font-display text-2xl">{content.focusValue}</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="float absolute right-[-40px] top-[24%] hidden rotate-6 border border-paper/20 bg-ink p-4 text-xs uppercase tracking-wider text-paper/60 lg:block">
        <Terminal className="mb-8 text-acid" />
        <span>{content.modeLabel}</span>
        <br />
        <strong className="text-paper">{content.modeValue}</strong>
      </div>
    </section>
  );
}
