# 小安之家官网 设计文档

**日期：** 2026-06-18  
**域名：** www.xiaoanhome.xyz  
**ICP：** 京ICP备2026021298号-3  
**公安备案：** 豫公网安备41018202001348号  
**联系邮箱：** mengyuefeitian@live.cn

---

## 1. 目标

构建一个双语（中文默认，可切换英文）静态网站，将开发者在 GitHub 上的 5 个应用集中展示，每个应用有独立的详情页，同时托管拾光匣和星枢令的隐私政策与用户协议（供华为 AppGallery 审核使用）。

**成功标准：**
- 本地 `npm run dev` 可预览全部页面
- `npm run build` 产出纯静态文件，可直接 Nginx 托管
- 法律页面 URL 与 AppGallery 填写的地址完全一致
- 中英文切换正常，SEO meta 标签完整
- 所有页面移动端适配

---

## 2. 技术栈

| 层次 | 选型 | 理由 |
|------|------|------|
| 框架 | Astro 5.x | 静态生成、内置 i18n、零运行时 JS、构建产物即静态文件 |
| 样式 | 纯 CSS（CSS Variables + CSS Grid/Flexbox） | 无框架依赖，体积小，维护简单 |
| 语言 | TypeScript（.astro 组件）| Astro 默认支持 |
| 构建输出 | `dist/`（静态 HTML/CSS/JS/图片）| 直接 `scp` 或 `rsync` 到服务器 |
| 本地开发 | `npm run dev`（Astro dev server，HMR）| |

**不引入：** React、Vue、Tailwind、任何 UI 组件库。

---

## 3. i18n 路由

- **中文（默认）：** `/`、`/arcanekey/`、`/lumibox/` 等（无前缀）
- **英文：** `/en/`、`/en/arcanekey/`、`/en/lumibox/` 等
- **法律页面：** 仅中文，URL 无语言前缀（已提交 AppGallery）
- **语言切换：** 顶部导航右侧 `中文 / EN` 切换按钮，切换后跳转对应语言的同路径页面

Astro i18n 配置：`defaultLocale: 'zh'`，`locales: ['zh', 'en']`，`routing: { prefixDefaultLocale: false }`

---

## 4. 导航结构

顶部水平固定导航，从左到右：

```
[Logo 小安之家]   首页   星枢令   无尽冬日活动   拾光匣   智卷   自动打印   [中文 / EN]
```

移动端收起为汉堡菜单。

---

## 5. 页面清单

### 5.1 首页 `/`（`/en/`）

- **Hero 区：** 品牌名 + 一句话介绍（小安工作室 / 独立开发者作品集）
- **应用卡片网格：** 6 个卡片（按导航顺序），每张卡片包含：
  - 应用图标
  - 中文名 + 英文名
  - 平台标签（HarmonyOS / macOS / 微信小程序）
  - 一句话功能描述
  - 「了解详情」按钮
- **页脚**

### 5.2 应用详情页（各应用共用模板）

每个应用详情页结构相同：

1. **Hero：** 图标 + 应用名 + 核心卖点句 + 平台/下载按钮
2. **功能亮点：** 3-6 个核心功能，图标 + 标题 + 说明
3. **使用场景：** 适用人群和场景说明
4. **截图/演示区：** 预留位（后续补充截图）
5. **下载/获取入口：** 对应平台链接或扫码

**各应用特有内容：**

| 应用 | 平台入口 | 特殊说明 |
|------|----------|----------|
| 星枢令 ArcaneKey | 华为 AppGallery + 微信小程序扫码 | 含 ICP 京ICP备2026021298号-4A |
| 无尽冬日活动 | 微信小程序扫码 | 游戏类，说明报名管理场景 |
| 拾光匣 LumiBox | 华为 AppGallery | 含隐私政策/用户协议链接 |
| 智卷 AutoVolume | GitHub Releases 下载 | 当前版本 0.1.45 |
| 自动打印 AutoPrint | GitHub 链接 | macOS，说明办公/NAS 场景 |

### 5.3 法律页面（仅中文，无英文版）

| 路径 | 内容来源 | 用途 |
|------|----------|------|
| `/lumibox/privacy-policy` | `LumiBox/docs/privacy-policy.md` | 华为 AppGallery 隐私政策链接 |
| `/lumibox/user-agreement` | `LumiBox/docs/user-agreement.md` | 华为 AppGallery 用户协议链接 |
| `/arcanekey/privacy-policy` | `ArcaneKey/docs/legal/隐私政策.md` | 华为 AppGallery 隐私政策链接 |
| `/arcanekey/user-agreement` | `ArcaneKey/docs/legal/用户协议.md` | 华为 AppGallery 用户协议链接 |

法律页面使用极简排版（无侧边栏，最大宽度 720px，清晰层级标题），Markdown 内容通过 Astro 的 `Content Collections` 或直接导入渲染。

---

## 6. 视觉设计

### 配色
- **背景：** 深色主题，主背景 `#0d1117`（类 GitHub 深色）
- **文字：** `#e6edf3`（主文字）/ `#8b949e`（次文字）
- **强调色（CSS Variables，每应用可覆盖）：** 主色 `#6366f1`（靛蓝）

### 字体
- 中文：系统字体栈（`PingFang SC, Microsoft YaHei, sans-serif`）
- 英文：`Inter, system-ui, sans-serif`

### 布局
- 最大宽度：`1200px`，水平居中
- 应用卡片：CSS Grid，桌面 3 列，平板 2 列，手机 1 列

---

## 7. 项目目录结构

```
小安之家/
├── package.json
├── astro.config.mjs
├── tsconfig.json
├── public/
│   └── images/           ← 应用图标、截图
├── src/
│   ├── i18n/
│   │   ├── zh.ts         ← 中文翻译
│   │   └── en.ts         ← 英文翻译
│   ├── layouts/
│   │   ├── Base.astro    ← 含 <head>、导航、页脚
│   │   └── Legal.astro   ← 法律页专用布局（无语言切换）
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── AppCard.astro
│   │   └── FeatureBlock.astro
│   ├── pages/
│   │   ├── index.astro             ← 首页（中文）
│   │   ├── arcanekey/
│   │   │   ├── index.astro
│   │   │   ├── privacy-policy.astro
│   │   │   └── user-agreement.astro
│   │   ├── lumibox/
│   │   │   ├── index.astro
│   │   │   ├── privacy-policy.astro
│   │   │   └── user-agreement.astro
│   │   ├── winter-fortress/
│   │   │   └── index.astro
│   │   ├── autovolume/
│   │   │   └── index.astro
│   │   ├── autoprint/
│   │   │   └── index.astro
│   │   └── en/
│   │       ├── index.astro
│   │       ├── arcanekey/index.astro
│   │       ├── lumibox/index.astro
│   │       ├── winter-fortress/index.astro
│   │       ├── autovolume/index.astro
│   │       └── autoprint/index.astro
│   └── styles/
│       └── global.css
└── docs/
    └── superpowers/specs/
        └── 2026-06-18-xiaoanhome-website-design.md
```

---

## 8. SEO

每个页面的 `<head>` 包含：
- `<title>`（中英文对应）
- `<meta name="description">`
- `<meta property="og:*">` Open Graph
- `<html lang="zh-CN">` 或 `<html lang="en">`
- `<link rel="canonical">`
- `<link rel="alternate" hreflang="zh" href="...">` / `<link rel="alternate" hreflang="en" href="...">`（应用页面互指，法律页不需要）

---

## 9. 部署（本地完成后）

1. 服务器安装 Nginx
2. `npm run build` 产出 `dist/`
3. `rsync -av dist/ user@server:/var/www/xiaoanhome/`
4. Nginx 配置：`root /var/www/xiaoanhome; try_files $uri $uri/ $uri.html =404;`
5. 配置 SSL（Let's Encrypt）

`try_files $uri.html` 使 `/lumibox/privacy-policy` 自动映射到 `privacy-policy.html`，无需服务端路由。

---

## 10. 待确认（实现前无需用户回答，按现有信息推进）

- 各应用截图/图标：实现中从现有代码仓库提取，或预留占位
- 无尽冬日活动/星枢令微信小程序二维码图片：从 README 中提取或预留
- AutoPrint 是否有下载链接：暂时链接到 GitHub repo 页面
