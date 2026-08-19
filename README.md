# VNDR Web

VNDR 的个人网站集成计划 demo。

VNDR 这个名称来自我的中文名谐音 vendor，去掉 `e` 和 `n` 后读音依然相同；再精简成 `VD` 作为 logo。网站的视觉延续了黑白二分的极简风格，主色调是黑、白、灰。

## 项目定位

VNDR 不是一个单一主题博客，而是一个可以持续扩展的个人网站集成计划。目前先做只读内容站，不包含账号体系与鉴权；内容通过文件维护，未来可以按需加入项目展示、Now、书签等模块。

## 目前包含

- 首页：品牌介绍、最近文章、未来模块预告
- 博客：文章列表页 + 文章详情页
- 关于：个人介绍
- 中英切换：`/zh` 与 `/en`，切换时保持当前页面位置

## 技术栈

- [Next.js 15](https://nextjs.org/)（App Router）
- TypeScript
- Tailwind CSS
- MDX / Markdown（内容驱动）

## 本地运行

```bash
npm install
npm run dev
```

启动后访问 [http://localhost:3000](http://localhost:3000)，默认会跳转到 `/zh`。

构建生产版本：

```bash
npm run build
```

## 目录结构

```text
VNDR_web/
├─ app/                    # 路由与页面
│  ├─ [locale]/            # 中英语言路由
│  │  ├─ blog/             # 博客列表与详情
│  │  ├─ about/            # 关于页
│  │  └─ page.tsx          # 首页
│  └─ layout.tsx           # 根布局
├─ components/             # Header、Footer、Logo 等组件
├─ content/                # 内容文件
│  ├─ blog/
│  │  ├─ zh/               # 中文博客文章
│  │  └─ en/               # 英文博客文章
│  └─ about/               # 关于页内容
├─ lib/                    # 内容加载与 i18n 工具
├─ public/                 # 静态资源（logo、背景图）
└─ README.md
```

## 内容维护

博客文章放在 `content/blog/<locale>/<slug>.md`（也支持 `.mdx`），例如：

```text
content/blog/zh/hello-world.md
content/blog/en/hello-world.md
```

文章 frontmatter 字段：

```yaml
---
title: "文章标题"
description: "文章摘要"
date: "2026-08-19"
tags: ["vndr", "meta"]
---
```

关于页内容放在 `content/about/zh.mdx` 和 `content/about/en.mdx`。

## 如何新增模块

1. 在 `app/[locale]/` 下新建页面目录，例如 `projects/page.tsx`。
2. 在 `lib/i18n.ts` 中补充对应语言的导航文案。
3. 在 `content/` 下新建内容目录，例如 `content/projects/`。
4. 根据需要创建独立的 `lib/content-*.ts` 加载器，保持内容与页面解耦。

这样后续加入项目展示、Now、书签等模块时，不需要改动既有路由结构。

## 注意事项

- 不要在 `npm run dev` 运行期间执行 `npm run build`，两者共用 `.next` 缓存，可能导致页面报 `Cannot find module` 或 `ENOENT`。
- 如果出现过类似缓存冲突，停掉 dev server 后删除 `.next` 目录再重新启动即可：

```bash
rm -rf .next
npm run dev
```
