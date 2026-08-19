"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, nav, type Locale } from "@/lib/i18n";
import VdMark from "./VdMark";

export default function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const t = nav[locale];
  const alternate = locales.find((l) => l !== locale) ?? locale;
  const rest = pathname.replace(new RegExp(`^/${locale}`), "");
  const alternatePath = `/${alternate}${rest || ""}`;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <VdMark />
          <span className="text-lg font-semibold tracking-[0.18em]">VNDR</span>
        </Link>

        <nav className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
          <Link href={`/${locale}/blog`} className="transition hover:text-muted">
            {t.blog}
          </Link>
          <Link href={`/${locale}/about`} className="transition hover:text-muted">
            {t.about}
          </Link>
          <Link
            href={alternatePath}
            className="border border-ink px-3 py-1.5 transition hover:bg-ink hover:text-paper"
          >
            {t.switchTo}
          </Link>
        </nav>
      </div>
    </header>
  );
}
