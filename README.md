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

## Git 推送指南

### 第一次在这台电脑上提交

```bash
git status
git add .
git commit -m "init blog"
git push -u origin main
```

### 以后每次更新文章后的标准流程

```bash
git status
git add .
git commit -m "docs: add new post"
git push
```

如果你这次只是改样式、配置或页面文案，也可以把提交信息写得更清楚一些，例如：

```bash
git commit -m "style: adjust homepage layout"
git commit -m "feat: add tags page content"
git commit -m "docs: publish new article"
```

### 推荐的日常发布流程

1. 在 `src/data/blog/` 新建或修改 Markdown 文章
2. 本地预览

```bash
npm run dev
```

3. 本地检查

```bash
npm run check
npm run build
```

4. 没问题后执行：

```bash
git add .
git commit -m "docs: publish new article"
git push
```

5. 推送完成后，GitHub Actions 会自动部署到 GitHub Pages

### 常用 Git 命令

查看当前改了什么：

```bash
git status
```

查看提交历史：

```bash
git log --oneline --decorate -n 10
```

如果只是想把远程最新内容拉下来：

```bash
git pull
```

## 部署到 GitHub Pages

1. 仓库推送到 `main`
2. 仓库 `Settings > Pages` 里把 `Source` 设为 `GitHub Actions`
3. `Custom domain` 填 `b1og.molulu.top`
4. DNS 为 `b1og.molulu.top` 添加一条 `CNAME` 指向 `mooo1u.github.io`

仓库里已经包含：

- `public/CNAME`
- `.github/workflows/deploy.yml`

## Cloudflare 配置 `b1og.molulu.top`

当前测试域名是 `b1og.molulu.top`，在 Cloudflare 里这样配置：

1. 进入 `molulu.top`
2. 打开 `DNS` -> `Records`
3. 添加一条记录：
   - `Type`: `CNAME`
   - `Name`: `b1og`
   - `Target`: `mooo1u.github.io`
   - `Proxy status`: `DNS only`
   - `TTL`: `Auto`

然后去 GitHub 仓库：

1. 打开 `Settings` -> `Pages`
2. `Source` 选择 `GitHub Actions`
3. `Custom domain` 填 `b1og.molulu.top`
4. 等证书签发后启用 `Enforce HTTPS`

## 后期正式上线改回 `blog.molulu.top`

如果后面你想把测试域名 `b1og.molulu.top` 改成正式域名 `blog.molulu.top`，按下面做。

### 第一步：改仓库里的站点配置

把下面两个地方从 `b1og.molulu.top` 改成 `blog.molulu.top`：

- `src/config.ts` 里的 `website`
- `public/CNAME`

改完后提交并推送：

```bash
git add .
git commit -m "chore: switch domain from b1og to blog"
git push
```

### 第二步：改 Cloudflare DNS

在 Cloudflare 里新增正式域名记录：

- `Type`: `CNAME`
- `Name`: `blog`
- `Target`: `mooo1u.github.io`
- `Proxy status`: `DNS only`
- `TTL`: `Auto`

如果你不再需要测试域名，可以把原来的 `b1og` 那条记录删掉；如果想保留测试环境，也可以先不删。

### 第三步：改 GitHub Pages 自定义域名

进入仓库 `Settings -> Pages`：

1. 把 `Custom domain` 从 `b1og.molulu.top` 改成 `blog.molulu.top`
2. 保存
3. 等 GitHub 重新签发 HTTPS 证书
4. 证书正常后启用 `Enforce HTTPS`

### 切域名时的推荐顺序

最稳的顺序是：

1. 先在 Cloudflare 增加 `blog` 的 CNAME
2. 再改仓库里的 `src/config.ts` 和 `public/CNAME`
3. 推送代码
4. 最后去 GitHub Pages 把 `Custom domain` 改成 `blog.molulu.top`

这样中间出错的概率最低。

### 切换完成后要检查什么

正式切换到 `blog.molulu.top` 后，检查这几项：

1. `https://blog.molulu.top` 能正常打开
2. GitHub Pages 后台显示域名已生效
3. HTTPS 证书已签发
4. 搜索页、文章页、RSS 都能打开
5. 如果不再使用 `b1og.molulu.top`，可删除它的 DNS 记录
