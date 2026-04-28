# Molulu Blog

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

## 部署到 GitHub Pages

1. 仓库推送到 `main`
2. 仓库 `Settings > Pages` 里把 `Source` 设为 `GitHub Actions`
3. `Custom domain` 填 `b1og.molulu.top`
4. DNS 为 `b1og.molulu.top` 添加一条 `CNAME` 指向 `mooo1u.github.io`

仓库里已经包含：

- `public/CNAME`
- `.github/workflows/deploy.yml`
