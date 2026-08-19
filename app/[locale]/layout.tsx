import type { Metadata } from "next";
import { locales } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isChinese = locale !== "en";

  return {
    title: {
      default: "VNDR",
      template: "%s · VNDR",
    },
    description: isChinese
      ? "VNDR 的个人网站集成计划：博客、兴趣开发与更多内容。"
      : "VNDR's personal website integration project: blog, hobby development, and more.",
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = locales.includes(localeParam as (typeof locales)[number])
    ? (localeParam as (typeof locales)[number])
    : "zh";

  return (
    <>
      <Header locale={locale} />
      <div className="min-h-[calc(100vh-4rem)]">{children}</div>
      <Footer locale={locale} />
    </>
  );
}
