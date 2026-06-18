import type { ComponentType } from "react";

export type StackItem = {
  name: string;
  icon: ComponentType<{ className?: string }>;
};

export function StackPills({ stacks }: { stacks: StackItem[] }) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-3">
      {stacks.map(({ name, icon: Icon }) => (
        <span
          key={name}
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase leading-none tracking-wider text-paper/70"
        >
          <Icon className="h-4 w-4 text-acid/90" aria-hidden="true" />
          {name}
        </span>
      ))}
    </div>
  );
}
