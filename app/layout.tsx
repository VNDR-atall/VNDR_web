import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "VNDR",
    template: "%s · VNDR",
  },
  description: "VNDR 的个人网站集成计划：博客、兴趣开发与更多内容。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
