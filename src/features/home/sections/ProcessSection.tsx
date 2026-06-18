export function ProcessSection() {
  return (
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
  );
}
