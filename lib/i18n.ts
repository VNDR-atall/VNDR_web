export const locales = ["zh", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh";

export const localeNames: Record<Locale, string> = {
  zh: "中文",
  en: "English",
};

export const nav = {
  zh: {
    home: "首页",
    blog: "博客",
    about: "关于",
    switchTo: "English",
  },
  en: {
    home: "Home",
    blog: "Blog",
    about: "About",
    switchTo: "中文",
  },
} as const;

export const site = {
  zh: {
    tagline: "个人网站集成计划",
    modules: "扩展模块",
    latest: "最近文章",
    aboutLabel: "关于我",
    readMore: "阅读全文",
    viewAll: "查看全部",
    heroIntro: "V-D-R 的发音就像 vendor：一个人、一台服务器、一个可以慢慢生长的内容集合。",
    aboutCardTitle: "VNDR 是一个缓慢生长的个人网站集成计划。",
    aboutCardText: "目前先做只读内容站，以后可以按需加入项目、Now、书签等模块，所有内容都以文件方式维护。",
    blogEyebrow: "博客",
    blogTitle: "博客",
    blogDescription: "关于 VNDR 名字的由来、建站过程，以及以后会慢慢出现的开发随笔。",
    aboutEyebrow: "关于",
    aboutTitle: "关于我",
    brandLabel: "品牌",
    brandText: "vendor 去掉 e 和 n，读音依然一样。再精简成 VD，成为 logo。",
    backToBlog: "返回博客",
    footerBrandNote: "vendor 去掉 e 和 n",
    footerNote: "黑白二分 · 简单可扩展 · 内容由文件驱动",
    modulesList: [
      { id: "projects", title: "项目", desc: "展示兴趣开发与作品" },
      { id: "now", title: "Now", desc: "记录当前在做的事" },
      { id: "bookmarks", title: "收藏", desc: "链接、灵感与碎片" },
    ],
  },
  en: {
    tagline: "Personal website integration project",
    modules: "Future modules",
    latest: "Latest notes",
    aboutLabel: "About",
    readMore: "Read post",
    viewAll: "View all",
    heroIntro: "V-D-R sounds like vendor: one person, one server, and a content collection that can keep growing.",
    aboutCardTitle: "VNDR is a slowly growing personal website integration project.",
    aboutCardText: "It is a read-only content site for now. Modules like projects, Now, and bookmarks can be added as needed, with content maintained in files.",
    blogEyebrow: "Blog",
    blogTitle: "Notes",
    blogDescription: "Notes on the VNDR name, building this site, and future dev logs.",
    aboutEyebrow: "About",
    aboutTitle: "About me",
    brandLabel: "Brand",
    brandText: "Remove e and n from vendor, and it still sounds the same. Trim it further to VD, and it becomes the logo.",
    backToBlog: "Back to blog",
    footerBrandNote: "vendor minus e and n",
    footerNote: "Black and white split · simple and extensible · file-driven content",
    modulesList: [
      { id: "projects", title: "Projects", desc: "Showcase experiments and projects" },
      { id: "now", title: "Now", desc: "What I am doing right now" },
      { id: "bookmarks", title: "Bookmarks", desc: "Links, ideas, and fragments" },
    ],
  },
} as const;
