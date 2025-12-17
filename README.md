# Svelte + PDF.JS 查看器

使用 Svelte + Vite + Tailwind 包装 PDF.js 4.3.136 的 generic viewer，让你可以直接在浏览器中加载 PDF 并使用自定义工具栏、侧边栏、查找等功能。

## 原理简介
- 以 PDF.js 的 generic viewer 构建产物作为底层。
- `src/main.js` 挂载 Svelte 应用。
- `App.svelte` 运行时动态导入 `public/pdf.js/web/viewer.mjs`，复用 PDF.js 自带的 UI 逻辑和事件总线。
- PDFViewerApplication 的事件（如 `scalechanging/pagechanging/documentloaded`）经 `src/event.js` 的 RxJS `Subject` 向各组件广播，实现自定义工具栏、查找框等 UI。
- `src/app_options.js` 控制工具栏、加载条等可选项。

## 准备与安装
需要 Node.js（建议 18+）与 pnpm。

```bash
pnpm install
```

## 构建与运行
1. 构建 PDF.js generic viewer 并复制到 `public/pdf.js/`（首次可能耗时，依赖 gulp 任务）：
   ```bash
   pnpm run generic
   pnpm run copy-pdf
   ```
2. 启动开发服务器：
   ```bash
   pnpm dev
   ```
3. 生产构建与本地预览：
   ```bash
   pnpm build
   pnpm preview
   ```

## 其他说明
- 功能开关位于 `src/app_options.js`（例如是否显示工具栏、加载条）。
- 通过 `src/event.js` 使用 RxJS 将 PDFViewerApplication 的事件暴露给 Svelte 组件。
- 默认允许 `http://localhost:5173` 访问 viewer，如需扩展请调整 `src/main.js` 与 `src/app_options.js`。
