# Mo1u's Blog

基于 AstroPaper 的个人博客，使用 Astro 生成静态页面，文章主要写在 Markdown 文件里。

## 本地开发

```bash
npm install
npm run dev
```

## 写文章

在 `src/data/blog/` 下新增 `.md` 文件，例如：

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
```
