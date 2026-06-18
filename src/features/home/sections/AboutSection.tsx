export function AboutSection({
  principles,
}: {
  principles: Array<[string, string, string]>;
}) {
  return (
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
          {principles.map(([num, title, copy]) => (
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
  );
}
