import { ArrowUpRight, CheckCircle2, Download } from "lucide-react";

import type { HomeContent } from "../homeContent";

export function ResumeSection({
  content,
  cvFileName,
  cvHref,
  whatsappHref,
}: {
  content: HomeContent["resume"];
  cvFileName: string;
  cvHref: string;
  whatsappHref: string;
}) {
  const isExternalCvHref = cvHref.startsWith("http");
  const cvDownloadFileName = cvHref === "#" || isExternalCvHref ? undefined : cvFileName;
  const cvLinkRel = isExternalCvHref ? "noreferrer" : undefined;
  const cvLinkTarget = isExternalCvHref ? "_blank" : undefined;

  return (
    <section id="resume" className="bg-paper px-5 py-24 text-ink md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-ink/55">
            <CheckCircle2 size={16} aria-hidden="true" /> {content.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-bold uppercase leading-none tracking-[-0.05em] sm:text-5xl lg:text-7xl">
            {content.title}
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink/65">
            {content.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={cvHref}
              download={cvDownloadFileName}
              target={cvLinkTarget}
              rel={cvLinkRel}
              className="inline-flex items-center gap-2 rounded-full bg-acid px-5 py-3 text-xs font-bold uppercase tracking-wider text-paper transition hover:scale-[1.03]"
            >
              <Download size={15} aria-hidden="true" /> {content.downloadLabel}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-xs font-bold uppercase tracking-wider text-ink transition hover:border-acid hover:text-acid"
            >
              {content.contactLabel} <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:col-span-7">
          {content.highlights.map((highlight, index) => (
            <article key={highlight.title} className="rounded-lg border border-ink/10 bg-ink/5 p-5">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-acid">
                0{index + 1}
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold uppercase leading-tight">
                {highlight.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink/60">
                {highlight.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
