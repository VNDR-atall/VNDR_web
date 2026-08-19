import type { Locale } from "@/lib/i18n";
import { site } from "@/lib/i18n";
import VdMark from "./VdMark";

export default function Footer({ locale }: { locale: Locale }) {
  const t = site[locale];

  return (
    <footer className="mt-20 border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-center gap-3">
          <VdMark className="h-6 w-6" />
          <div>
            <p className="font-serif text-sm tracking-[0.3em]">VNDR</p>
            <p className="font-mono text-[11px] text-muted">{t.footerBrandNote}</p>
          </div>
        </div>
        <p className="max-w-sm font-mono text-xs leading-relaxed text-muted">
          {t.footerNote}
        </p>
      </div>
    </footer>
  );
}
