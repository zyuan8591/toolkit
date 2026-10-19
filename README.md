# toolkit

React + Next.js App Router + TypeScript + Zustand + Tailwind CSS + Lucide React + ESLint + Prettier。

## 啟動

```sh
cd ~/Desktop/react-starter
nvm use
npm run dev
```

開啟 http://localhost:3000。需要 Node.js 22.18.0（`.nvmrc`）。

## 指令

- `npm run dev`：開發伺服器
- `npm run build`：正式建置
- `npm start`：啟動正式版本（先 build）
- `npm run lint`：ESLint 檢查
- `npm run typecheck`：產生 Next.js 型別並檢查 TypeScript
- `npm run format`：格式化
- `npm run format:check`：檢查格式

## 從哪裡開始

- `src/app/page.tsx`：首頁，Server Component。
- `src/app/layout.tsx`：共用版型與頁面 metadata。
- `src/app/globals.css`：Tailwind 入口與全域樣式。
- `src/components/counter.tsx`：互動計數器，Client Component；示範 Lucide 與 Zustand。
- `src/stores/counter-store.ts`：有型別的 Zustand store 工廠，每個元件實例建立自己的 store，避免伺服器請求共用狀態。

計數器重新整理後會歸零。若日後需要跨頁共享狀態，可將 store 放進共用 layout 下的 Client Provider。

本專案選用 Next.js，使用內建路由與建置工具，因此不另安裝 Vite 或 React Router。

## 依賴檢查

建立時 `npm audit --omit=dev` 為 0 項漏洞。完整 audit 有 5 項 high 通報，皆來自開發工具 `eslint-config-next → fast-glob → micromatch → braces`；npm 提議的修復會將 Next.js ESLint 設定降至舊主版本，因此保留與框架一致的版本，待上游相容修補後再更新。

## 本機驗證

已通過 ESLint、Prettier、TypeScript 與正式建置，並以正式伺服器驗證計數器互動。

Codex 沙箱中的 `npm run dev` 曾遇到 macOS `unable to start FSEvent stream` 檔案監聽錯誤；可先在自己的終端機執行上述啟動指令。正式預覽可使用 `npm run build` 後執行 `npm start -- --port 3107`。
