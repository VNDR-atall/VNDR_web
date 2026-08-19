import Link from "next/link";
import type { Metadata } from "next";
import { getBlogPosts } from "@/lib/content";
import { nav, site, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "VNDR · Home",
};

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = (localeParam === "en" ? "en" : "zh") as Locale;
  const t = site[locale];
  const navT = nav[locale];
  const posts = getBlogPosts(locale).slice(0, 3);

  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-line bg-ink text-paper">
        <div className="grain absolute inset-0" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-5 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.35em] text-paper/60">
              {t.tagline}
            </p>
            <h1 className="font-serif text-[clamp(4.5rem,15vw,12rem)] leading-none tracking-tight">
              VNDR
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/75">
              {t.heroIntro}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`/${locale}/blog`}
                className="border border-paper px-5 py-3 font-mono text-xs uppercase tracking-widest transition hover:bg-paper hover:text-ink"
              >
                {navT.blog}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="border border-paper/40 px-5 py-3 font-mono text-xs uppercase tracking-widest text-paper/70 transition hover:border-paper hover:text-paper"
              >
                {navT.about}
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <img
              src="/VNDR_background.jpg"
              alt="VNDR background"
              className="aspect-[4/5] w-full border border-paper/30 object-cover grayscale"
            />
            <div className="absolute -bottom-5 -left-5 border border-paper bg-ink px-4 py-3 font-mono text-xs uppercase tracking-widest text-paper">
              v · n · d · r
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1fr_1fr]">
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-serif text-3xl">{t.latest}</h2>
            <Link href={`/${locale}/blog`} className="font-mono text-xs uppercase tracking-widest text-muted hover:text-ink">
              {t.viewAll} →
            </Link>
          </div>
          <div className="divide-y divide-line border-y border-line">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/${locale}/blog/${post.slug}`}
                className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <span className="font-serif text-2xl transition group-hover:translate-x-1">
                  {post.title}
                </span>
                <span className="font-mono text-xs text-muted">
                  {post.date.slice(0, 10)}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between border border-ink p-8 shadow-hard">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted">
              {t.aboutLabel}
            </p>
            <h2 className="font-serif text-4xl leading-tight">
              {t.aboutCardTitle}
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted">
              {t.aboutCardText}
            </p>
          </div>
          <Link
            href={`/${locale}/about`}
            className="mt-8 inline-flex w-fit items-center gap-3 border-b border-ink pb-1 font-mono text-xs uppercase tracking-widest"
          >
            {navT.about} →
          </Link>
        </div>
      </section>

      <section className="border-t border-line bg-paper">
        <div className="mx-auto w-full max-w-6xl px-5 py-16">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-muted">
            {t.modules}
          </p>
          <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
            {t.modulesList.map((module, index) => (
              <div key={module.id} className="bg-paper p-6 transition hover:bg-ink hover:text-paper">
                <span className="font-mono text-xs text-muted">0{index + 1}</span>
                <h3 className="mt-8 font-serif text-3xl">{module.title}</h3>
                <p className="mt-2 text-sm text-muted">{module.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
