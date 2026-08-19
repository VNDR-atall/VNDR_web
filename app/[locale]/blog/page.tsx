import Link from "next/link";
import { getBlogPosts, formatDate } from "@/lib/content";
import { site, type Locale } from "@/lib/i18n";

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = (localeParam === "en" ? "en" : "zh") as Locale;
  const t = site[locale];
  const posts = getBlogPosts(locale);

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-16">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted">{t.blogEyebrow}</p>
      <h1 className="font-serif text-6xl leading-none tracking-tight">
        {t.blogTitle}
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        {t.blogDescription}
      </p>

      <div className="mt-12 divide-y divide-line border-y border-line">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/${locale}/blog/${post.slug}`}
            className="group grid gap-3 py-8 sm:grid-cols-[9rem_1fr_auto] sm:items-baseline"
          >
            <span className="font-mono text-xs text-muted">{formatDate(post.date, locale)}</span>
            <div>
              <h2 className="font-serif text-3xl leading-tight transition group-hover:translate-x-1">
                {post.title}
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted">{post.description}</p>
            </div>
            <span className="font-mono text-xs text-muted">{site[locale].readMore} →</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
