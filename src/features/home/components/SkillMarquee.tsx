import type { StackItem } from "../../../shared/components/StackPills";

export function SkillMarquee({ skills }: { skills: StackItem[] }) {
  const renderSkillList = (duplicate = false) => (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={duplicate ? "true" : undefined}
    >
      {skills.map(({ name, icon: Icon }) => (
        <div
          key={name}
          className="flex items-center gap-3 border-r border-paper/25 px-6 md:px-10"
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
      className="overflow-hidden border-y border-paper bg-acid py-4 text-paper md:py-5"
      aria-label="Technology stack"
    >
      <div className="ticker">
        {renderSkillList()}
        {renderSkillList(true)}
      </div>
    </div>
  );
}
