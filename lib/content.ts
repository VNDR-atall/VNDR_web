import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Locale } from "./i18n";

const contentRoot = path.join(process.cwd(), "content");

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
};

function readMdx(filePath: string) {
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  return { data: data as Record<string, unknown>, content };
}

function asBlogPost(slug: string, filePath: string): BlogPost {
  const { data, content } = readMdx(filePath);
  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    content,
  };
}

export function getBlogPosts(locale: Locale): BlogPost[] {
  const dir = path.join(contentRoot, "blog", locale);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.(md|mdx)$/, "");
      return asBlogPost(slug, path.join(dir, file));
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPost(locale: Locale, slug: string): BlogPost | undefined {
  const mdPath = path.join(contentRoot, "blog", locale, `${slug}.md`);
  const mdxPath = path.join(contentRoot, "blog", locale, `${slug}.mdx`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;
  if (!fs.existsSync(filePath)) return undefined;
  return asBlogPost(slug, filePath);
}

export function getAbout(locale: Locale): string {
  const filePath = path.join(contentRoot, "about", `${locale}.mdx`);
  if (!fs.existsSync(filePath)) return "";
  const { content } = readMdx(filePath);
  return content;
}

export function formatDate(date: string, locale: Locale) {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(parsed);
}
