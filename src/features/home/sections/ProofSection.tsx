import { ArrowUpRight, Award, BookOpenCheck, Github } from "lucide-react";

import { SeparatedMeta } from "../../../shared/components/SeparatedMeta";
import { StackPills } from "../../../shared/components/StackPills";
import { credentials, professionalProof } from "../homeData";

export function ProofSection() {
  return (
    <section id="proof" className="border-y border-paper/15 bg-[#11110f] px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-acid">
              <BookOpenCheck size={16} /> Proof of work
            </p>
            <h2 className="font-display text-5xl font-bold uppercase leading-none tracking-[-0.06em] md:text-8xl">
              Production work.
              <span className="block text-paper/25">Validated learning.</span>
            </h2>
          </div>
          <p className="max-w-lg border-t border-paper/15 pt-6 text-sm leading-relaxed text-paper/55 md:col-span-4 md:col-start-9">
            A mix of production systems, confidential backoffice delivery, a
            critical web product, and structured Dicoding learning paths.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {professionalProof.map((item) => (
            <article
              key={item.title}
              className="flex min-h-[460px] flex-col border border-paper/15 bg-ink p-7 transition duration-500 hover:border-orange/70"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange">
                {item.label}
              </span>
              <h3 className="mt-5 font-display text-3xl font-bold uppercase leading-none tracking-[-0.04em] md:text-5xl">
                {item.title}
              </h3>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-paper/60">
                {item.description}
              </p>

              <SeparatedMeta items={item.highlights} />

              <div className="mt-auto pt-10">
                <StackPills stacks={item.stacks} />

                {"websiteHref" in item ? (
                  <a
                    href={item.websiteHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-10 inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink transition hover:bg-acid"
                  >
                    Open website <ArrowUpRight size={15} />
                  </a>
                ) : (
                  <span className="mt-10 inline-flex items-center rounded-full border border-paper/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-paper/50">
                    Confidential work
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {credentials.map((credential) => (
            <article
              key={credential.title}
              className="group relative flex min-h-[460px] flex-col overflow-hidden border border-paper/15 p-7 transition duration-500 hover:border-acid/70"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`text-xs font-bold uppercase tracking-[0.2em] ${credential.accent}`}>
                      {credential.provider}
                    </span>
                    <span className="border border-paper/20 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-paper/50">
                      {credential.status}
                    </span>
                  </div>
                  <h3 className="mt-5 max-w-xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-[-0.05em] md:text-5xl">
                    {credential.title}
                  </h3>
                </div>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-paper/20 text-acid transition group-hover:scale-110">
                  <Award size={24} strokeWidth={1.5} />
                </div>
              </div>

              <p className="mt-8 max-w-xl text-sm leading-relaxed text-paper/60">
                {credential.description}
              </p>

              <SeparatedMeta items={credential.topics} />

              <div className="mt-auto pt-10">
                <StackPills stacks={credential.stacks} />

                <div className="flex flex-wrap gap-3 pt-10">
                  <a
                    href={credential.repoHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink transition hover:bg-acid"
                  >
                    <Github size={15} /> GitHub repo
                  </a>
                  <a
                    href={credential.certificateHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-4 py-2 text-xs font-bold uppercase tracking-wider text-paper transition hover:border-orange hover:bg-orange hover:text-ink"
                  >
                    Certificate <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
