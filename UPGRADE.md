# AstroPaper 7.1.0 升级记录

- 升级前：AstroPaper 5.5.1、Astro 5.18.1。
- 升级后：AstroPaper 7.1.0、Astro 7.4.7；依赖版本固定在 `package-lock.json`。
- 工作分支：`codex/upgrade-astropaper-7.1.0`。
- 回退标签：`backup/astropaper-5.5.1-20261109`，指向 `376e7ab`。
- 本次只在本地升级；`main` 与线上站点保留原版本。

## 保留的内容

4 篇文章、96 张源图片、全部 public 资源和友链数据已逐一对照旧版确认完整。
文章从 `src/data/blog/` 移至 `src/content/posts/`，图片从 `src/data/images/`
移至 `src/content/images/`，文章正文和相对图片引用未改写。

保留原来的浅蓝/深蓝配色、字体、首页、导航、友链布局、文章地址、标题锚点、
文章作者及分享封面。同一时间发布的文章按 ID 降序排列，保持现有系列顺序。
使用 `compressHTML: true` 保留兼容旧版的行内空白行为。

## 新版功能

接入桌面侧边目录、小屏悬浮目录、图片查看器、宽表格滚动、MDX 和 callout 支持。
目录延续本博客的一级到六级标题范围。界面文案集中在 `src/i18n/lang/zh-CN.ts`。
未来日期文章按 `Asia/Shanghai` 的整日发布，不再等待当天的具体时刻。

## 验证

- `npm ci` 可复现安装；GitHub Pages 工作流同步使用 `npm ci`。
- `npm run build`、`npm run lint` 和升级代码的 Prettier 检查通过。
- 类型检查：0 errors、0 warnings、0 hints。
- 14 个 HTML 页面及站内链接/资源完整；首页和文章列表顺序保持一致。
- 4 篇文章的浏览器可见正文、全部标题锚点、图片数量与旧版一致，图片正常解码。
- 实测搜索命中、主题切换与跨页保持、手机菜单、目录开关与跳转。
- 实测图片点击/键盘打开、滚轮缩放、Escape/按钮关闭；手机双指手势未在真机测试。
- 390px 手机视口检查通过。外部友链头像和字体服务的可用性取决于第三方站点。

本地系统 Node 24.11.1 低于新版 lint 工具要求；本次使用已有的 Node 24.22.1
完成验证。日常开发建议更新到 Node 24.16+，CI 的 Node 24 会使用该系列新版本。

已更新兼容依赖补丁以修复 fast-xml-builder 高危告警。最终 `npm audit` 为
0 high、0 critical、10 moderate（包括依赖链重复计数），涉及 minimatch、
postcss-selector-parser、fflate 及依赖它们的构建/检查工具。当前上游部分固定版本
尚未采用补丁；未使用强制降级或未经验证的跨大版本 override。博客输出为静态文件，
这些包不作为线上服务器运行，但构建环境仍应只处理可信的本地内容。

回退操作见 `README.md`。合并上线后可撤销本次升级提交，再重新部署。
