import type { StackItem } from "../../../shared/components/StackPills";

export function SkillMarquee({ skills }: { skills: StackItem[] }) {
  const SkillList = () => (
    <div className="flex shrink-0 items-center">
      {skills.map(({ name, icon: Icon }) => (
        <div
          key={name}
          className="flex items-center gap-3 border-r border-ink/25 px-6 md:px-10"
        >
          <Icon className="h-7 w-7 md:h-10 md:w-10" aria-hidden="true" />
          <span className="font-display text-sm font-bold uppercase tracking-tight md:text-xl">
            {name}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div
      className="overflow-hidden border-y border-ink bg-acid py-4 text-ink md:py-5"
      aria-label="Technology stack"
    >
      <div className="ticker flex w-max">
        <SkillList />
        <SkillList />
      </div>
    </div>
  );
}
