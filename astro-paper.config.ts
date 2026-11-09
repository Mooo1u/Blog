import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://blog.molulu.top",
    title: "Mo1u's blog",
    subtitle: "这趟旅行若是开心，亦是无负这一生",
    description:
      "Mo1u 的 Markdown 博客，基于 AstroPaper 与 Astro 构建，部署在 GitHub Pages。",
    author: "Mo1u",
    profile: "https://github.com/Mooo1u",
    ogImage: "astropaper-og.jpg",
    lang: "zh-CN",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: { perPage: 4, perIndex: 4 },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
    toc: true,
  },
  socials: [
    {
      name: "github",
      url: "https://github.com/Mooo1u/Blog",
      linkTitle: "Mo1u's blog on GitHub",
    },
  ],
  shareLinks: [],
});
