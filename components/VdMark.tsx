export default function VdMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect x="2" y="2" width="60" height="60" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2" />
      <rect x="2" y="32" width="60" height="30" fill="var(--ink)" />
      <path d="M10 44 L32 18 L54 44" fill="none" stroke="var(--paper)" strokeWidth="5" />
      <path d="M10 44 L32 18 L54 44" fill="none" stroke="var(--ink)" strokeWidth="2" />
      <circle cx="32" cy="44" r="3" fill="var(--paper)" />
    </svg>
  );
}
