# Mo1u's Blog

基于 [AstroPaper 7.1.0](https://github.com/satnaing/astro-paper/releases/tag/v7.1.0) 的个人博客，使用 Astro 生成静态页面，部署在 GitHub Pages。

## 本地开发

使用 Node.js 24.16+（也支持 22.23.4+ 的 22.x）。CI 使用 Node 24。

```bash
npm ci
npm run dev
```

`npm run build` 会先检查类型，再生成静态页面和 Pagefind 搜索索引。查看构建结果可运行 `npm run preview`。

## 写文章

在 `src/content/posts/` 下新增 `.md` 或 `.mdx` 文件，例如：

```md
---
author: Molulu
pubDatetime: 2026-04-28T23:55:00+08:00
title: 新文章标题
featured: false
draft: false
tags:
  - 随笔
description: 一句话摘要
---

正文内容

![图片描述](../images/example.png)
```

文章图片放在 `src/content/images/`；关于页在 `src/content/pages/about.md`。

目录自动收录文章的一级到六级标题：桌面在侧边显示，小屏通过悬浮按钮打开。单篇文章可设置 `hideToc: true` 隐藏目录。文章内图片支持点击放大、滚轮缩放、拖动和手机双指缩放。

## 配置

- 站点信息、分页、功能开关、社交链接：`astro-paper.config.ts`
- 配色、字体：`src/styles/theme.css`
- 中文界面文字：`src/i18n/lang/zh-CN.ts`
- 友链数据：`src/data/friends.ts`

文章按站点时区 `Asia/Shanghai` 的日期发布；同一天内不再按具体时刻延迟发布。
