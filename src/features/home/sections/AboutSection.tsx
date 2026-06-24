import type { HomeContent } from "../homeContent";

export function AboutSection({
  content,
}: {
  content: HomeContent["about"];
}) {
  return (
    <section id="about" className="bg-ink px-5 py-24 text-paper md:px-10 md:py-36">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]">
              <span className="h-2 w-2 bg-acid" /> {content.eyebrow}
            </p>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-4xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              {content.titleTop}
              <span className="block text-paper/25">{content.titleBottom}</span>
            </h2>
            <div className="mt-12 grid gap-8 border-t border-paper/20 pt-8 md:grid-cols-2">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-paper/65">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-3 sm:grid-cols-3">
          {content.principles.map(([num, title, copy]) => (
            <div
              key={num}
              className="rounded-3xl border border-paper/20 p-8"
            >
              <span className="text-xs font-bold text-acid">{num}</span>
              <h3 className="mt-8 font-display text-2xl font-bold uppercase">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/55">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
