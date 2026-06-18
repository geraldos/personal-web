export function HapiIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 46 25 35" strokeWidth="4" />
        <path d="M30 18 22 7" strokeWidth="4" />
        <path d="M50 29 58 24" strokeWidth="4" />
        <circle cx="10" cy="50" r="4" fill="currentColor" strokeWidth="0" />
        <circle cx="20" cy="5" r="4" fill="currentColor" strokeWidth="0" />
        <circle cx="60" cy="23" r="4" fill="currentColor" strokeWidth="0" />
        <path
          d="M18 44c-3-13 4-27 18-31 12-3 23 2 25 13 1 5-1 7-6 7-7 0-11-2-21 2-7 3-11 9-16 9Z"
          fill="currentColor"
          strokeWidth="0"
        />
        <path
          d="M15 40c-5 0-8 4-8 9 6 1 12-1 16-5-1-2-4-4-8-4Z"
          fill="currentColor"
          opacity="0.7"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}
