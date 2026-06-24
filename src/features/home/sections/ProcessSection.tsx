import type { HomeContent } from "../homeContent";

export function ProcessSection({ content }: { content: HomeContent["process"] }) {
  return (
    <section className="border-y border-paper/15 bg-ink px-5 py-24 md:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-acid">
              {content.eyebrow}
            </p>
            <h2 className="font-display text-4xl font-bold uppercase leading-none tracking-[-0.05em] md:text-6xl">
              {content.titleTop}
              <br />
              <span className="text-paper/25">{content.titleBottom}</span>
            </h2>
          </div>
          <div className="grid gap-8 border-t border-paper/15 pt-8 md:col-span-7 md:grid-cols-2">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-paper/55">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
