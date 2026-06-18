import { projects } from "../homeData";
import type { HomeContent } from "../homeContent";

export function WorkSection({ content }: { content: HomeContent["work"] }) {
  return (
    <section id="work" className="px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-acid">
              {content.eyebrow}
            </p>
            <h2 className="font-display text-5xl font-bold uppercase leading-none tracking-[-0.06em] md:text-8xl">
              {content.title}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-paper/50">
            {content.description}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => {
            const copy = content.projects[index];
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
                      {copy.title}
                      </h3>
                      <p className="mt-5 text-sm leading-relaxed opacity-65">
                      {copy.description}
                      </p>
                      <div className="mt-8 flex flex-wrap gap-2">
                      {copy.tags.map((tag) => (
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
  );
}
