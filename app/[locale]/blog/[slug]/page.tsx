import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPost, getBlogPosts, formatDate } from "@/lib/content";
import { site, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return [
    ...getBlogPosts("zh").map((post) => ({ locale: "zh", slug: post.slug })),
    ...getBlogPosts("en").map((post) => ({ locale: "en", slug: post.slug })),
  ];
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  const locale = (localeParam === "en" ? "en" : "zh") as Locale;
  const t = site[locale];
  const post = getBlogPost(locale, slug);
  if (!post) notFound();

  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-16">
      <Link href={`/${locale}/blog`} className="font-mono text-xs uppercase tracking-widest text-muted hover:text-ink">
        ← {t.backToBlog}
      </Link>
      <article className="mt-8">
        <div className="border-b border-line pb-8">
          <h1 className="font-serif text-5xl leading-tight tracking-tight">{post.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted">
            <span>{formatDate(post.date, locale)}</span>
            {post.tags.map((tag) => (
              <span key={tag} className="border border-line px-2 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="prose prose-neutral mt-10 max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </main>
  );
}
