export const SITE = {
  website: "https://blog.molulu.top",
  author: "Mo1u",
  profile: "https://github.com/Mooo1u",
  desc: "Mo1u 的 Markdown 博客，基于 AstroPaper 与 Astro 构建，部署在 GitHub Pages。",
  title: "Mo1u's blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "编辑此页",
    url: "https://github.com/Mooo1u/Blog/edit/main/",
  },
  dynamicOgImage: false,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh-CN", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
