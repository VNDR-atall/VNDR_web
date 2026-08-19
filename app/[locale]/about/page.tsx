import { MDXRemote } from "next-mdx-remote/rsc";
import { getAbout } from "@/lib/content";
import { site, type Locale } from "@/lib/i18n";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = (localeParam === "en" ? "en" : "zh") as Locale;
  const t = site[locale];
  const content = getAbout(locale);

  return (
    <main className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1fr_1fr]">
      <div>
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted">{t.aboutEyebrow}</p>
        <h1 className="font-serif text-6xl leading-none tracking-tight">
          {t.aboutTitle}
        </h1>
        <div className="mt-8 max-w-xl">
          <div className="prose prose-neutral">
            <MDXRemote source={content} />
          </div>
        </div>
      </div>

      <div className="grid content-start gap-4 lg:pt-16">
        <div className="border border-ink p-6 shadow-hard">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">{t.brandLabel}</p>
          <p className="mt-4 font-serif text-3xl leading-tight">VNDR</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {t.brandText}
          </p>
        </div>
        <img
          src="/VD_logo.jpg"
          alt="VD logo"
          className="aspect-square w-full border border-ink object-cover grayscale"
        />
      </div>
    </main>
  );
}
