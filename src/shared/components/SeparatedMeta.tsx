export function SeparatedMeta({ items }: { items: readonly string[] }) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
      {items.map((item, index) => (
        <span
          key={item}
          className="text-[10px] font-bold uppercase tracking-wider text-paper/45"
        >
          {item}
          {index < items.length - 1 ? <span className="ml-3 text-paper/20">|</span> : null}
        </span>
      ))}
    </div>
  );
}
