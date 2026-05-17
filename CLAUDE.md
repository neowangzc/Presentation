# Presentation Monorepo

Slidev 多 talk monorepo。每个顶层子目录是一个独立的 Slidev 演示（`about-me/`, `20260409/`, `demo-training/`, `slidecodex/` …）。通过 **pnpm workspace** 共享依赖，避免每个 talk 单独装一份 ~500MB 的 `node_modules`。

## 工具链

- **包管理器**：必须用 `pnpm`（≥ 11）。不要用 `npm install`，会破坏 workspace 共享、生成多余的 `package-lock.json`，且 PR 上 CI 会失败。
- **Node**：v20+（CI 用 20）。
- **Slidev**：每个 talk 自己在 `package.json` 里钉版本。

## 目录结构

```
.
├── pnpm-workspace.yaml      # 登记所有 talk 子目录
├── pnpm-lock.yaml           # 唯一 lockfile，跨所有 talk
├── .github/workflows/deploy.yml  # 每个 talk 一个 build block
├── about-me/                # talk 1
│   ├── package.json
│   ├── slides.md
│   └── ...
├── 20260409/                # talk 2
├── demo-training/           # talk 3
└── slidecodex/              # talk 4
```

根目录的 `node_modules/` 是 pnpm 的 `.pnpm/` 内容寻址存储（硬链接到 `~/Library/pnpm`）。每个 talk 的 `node_modules/` 是几十 KB 的符号链接，**不要手动改**。

## 常用命令

```bash
# 首次 clone 后，装所有 talk 的依赖
pnpm install

# 跑某个 talk 的 dev server
cd about-me && pnpm dev

# Build 某个 talk
cd about-me && pnpm build

# 给某个 talk 加依赖（不要 cd 进去用 npm）
pnpm --filter about-me add some-package
pnpm --filter about-me add -D some-dev-package
```

## 加一个新 talk

1. 建目录、写 `package.json`（参考 `about-me/package.json`）：
   ```json
   {
     "name": "talk-2026-XX",
     "type": "module",
     "private": true,
     "scripts": {
       "dev": "slidev --open",
       "build": "slidev build",
       "export": "slidev export"
     },
     "dependencies": {
       "@slidev/cli": "^52.11.2",
       "@slidev/theme-default": "latest",
       "vue": "^3.5.26"
     }
   }
   ```
2. 在根 `pnpm-workspace.yaml` 的 `packages:` 列表加一行 `- 'talk-2026-XX'`。
3. 在根目录跑 `pnpm install`（不带任何参数就会扫到新 workspace 成员）。
4. 在 `.github/workflows/deploy.yml` 抄一个现成 talk 的 "Build" + "Move to Public" 两个 step（搜 `slidecodex` 那段最干净），把名字换掉。
5. 部署后访问 `https://<user>.github.io/<repo>/talk-2026-XX/`。

## 部署（GitHub Pages）

- `main` / `master` push 自动触发 `.github/workflows/deploy.yml`。
- CI 流程：setup pnpm → `pnpm install --frozen-lockfile`（一次装全部）→ 依次 build 每个 talk → 拼到 `public/` 下 → 生成索引页 → 上传到 Pages。
- 单个 talk build 失败不会因为 `if: hashFiles('xxx/package.json') != ''` 卡死其它 talk（只要那个 talk 目录被删，对应 step 自动跳过）。

## 历史踩坑

### 1. pnpm 严格隔离 → 必须显式声明所有 import 的包
npm flat hoisting 会把传递依赖（比如 `@slidev/types`）也露在顶层 `node_modules`，所以 `setup/main.ts` 里 `import { defineAppSetup } from '@slidev/types'` 就算没在自己 `package.json` 里写也能跑。pnpm 不会。

**症状**：build 时报 `Rolldown failed to resolve import "@slidev/types"`。

**修复**：`pnpm --filter <talk> add -D @slidev/types`（或者其它缺的包）。这其实是修了一个 npm 时代被隐藏的 bug。

### 2. 子目录里不要 `git init`
之前 `slidecodex/` 嵌套了一个独立 `.git`，导致父 repo 无法把它作为普通目录追踪 → push 上去 CI 拉不到这个目录 → `pnpm install --frozen-lockfile` 因 workspace 找不到这个包而报错。

**做法**：所有 talk 都是父 monorepo 的普通子目录，不要在子目录跑 `git init`。

### 3. 不要把 `package-lock.json` 提交回来
切到 pnpm 后只保留 `pnpm-lock.yaml`。如果哪个 talk 又冒出 `package-lock.json`，说明有人在子目录跑了 `npm install`，删掉就好。

## 给未来 Agent 的备忘

- 改任何 talk 之前先 `cd` 到对应子目录，但**装依赖一律回到根目录**用 `pnpm --filter <name> add ...`。
- 想验证一个 talk 没坏：`cd <talk> && pnpm exec slidev build`（~1–4 秒）。
- 想验证整个 workspace 没坏：在根目录跑 `pnpm -r build`（`-r` = recursive，按依赖顺序 build 所有 workspace 成员）。
- 改了 `deploy.yml` 后无法本地测，但可以 `act` 或者直接 push 到一个分支跑一次（已有 concurrency cancel-in-progress，新 push 会取消旧的）。
