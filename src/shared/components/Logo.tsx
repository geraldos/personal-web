const localizedIdentity = {
  en: { name: "Geraldo", role: "Full-stack Engineer" },
  id: { name: "Geraldo", role: "Full-stack Engineer" },
  ja: { name: "ジェラルド", role: "フルスタックエンジニア" },
  zh: { name: "杰拉尔多", role: "全栈工程师" },
} as const;

export function Logo({ language = "en" }: { language?: keyof typeof localizedIdentity }) {
  const identity = localizedIdentity[language];

  return (
    <a href="#top" aria-label="Geraldo home" className="group flex items-center gap-3">
      <svg viewBox="0 0 52 52" className="h-11 w-11" aria-hidden="true">
        <rect x="1" y="1" width="50" height="50" rx="14" fill="#60a5fa" />
        <path
          d="M35.5 18.5A13 13 0 1 0 38 31H28v-7h16v20h-7v-5.5A19 19 0 1 1 40.5 14z"
          fill="#0a0a09"
        />
      </svg>
      <span className="font-display text-sm font-bold uppercase leading-none tracking-tight">
        {identity.name}
        <br />
        <span className="text-acid">{identity.role}</span>
      </span>
    </a>
  );
}
