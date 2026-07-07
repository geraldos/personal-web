import { FileText, MoveUpRight } from "lucide-react";

import type { HomeContent } from "../homeContent";

export function FieldNotesSection({ content }: { content: HomeContent["fieldNotes"] }) {
  return (
    <section id="field-notes" className="border-y border-paper/15 bg-ink px-5 py-24 text-paper md:px-10 md:py-36">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-acid">
              <FileText size={16} aria-hidden="true" /> {content.eyebrow}
            </p>
            <h2 className="font-display text-4xl font-bold uppercase leading-none tracking-[-0.06em] sm:text-5xl lg:text-8xl">
              {content.title}
            </h2>
          </div>
          <p className="max-w-lg border-t border-paper/15 pt-6 text-sm leading-relaxed text-paper/60 lg:col-span-4 lg:col-start-9">
            {content.description}
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {content.notes.map((note, index) => (
            <article
              key={note.title}
              className="group flex min-h-[520px] flex-col rounded-lg border border-paper/15 bg-paper/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-acid/70 md:p-7"
            >
              <div className="flex items-start justify-between gap-6 border-b border-paper/15 pb-6">
                <span className="font-display text-5xl font-bold text-paper/20">
                  0{index + 1}
                </span>
                <MoveUpRight
                  className="h-7 w-7 text-acid transition group-hover:rotate-45"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-8 font-display text-3xl font-bold uppercase leading-none tracking-[-0.04em]">
                {note.title}
              </h3>

              <dl className="mt-auto grid gap-5 pt-10">
                {[
                  [content.contextLabel, note.context],
                  [content.moveLabel, note.move],
                  [content.signalLabel, note.signal],
                ].map(([label, value]) => (
                  <div key={label} className="border-t border-paper/15 pt-4">
                    <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-acid">
                      {label}
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-paper/65">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
