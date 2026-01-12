# Slidev 多项目部署指南

这是一个基于 GitHub Actions 的 Slidev 多项目部署方案。它允许你在同一个仓库中管理多个 Slidev 演示文稿，并自动生成一个索引页面。

## 1. 核心优势

*   **单一仓库，无限演示**：所有 PPT 都在一个仓库里，不需要为每个 PPT 建新库。
*   **自动索引**：首页会自动列出所有可用的 PPT，点击即达。
*   **结构清晰**：源码和构建产物分离，仓库干净整洁。
*   **完全免费**：利用 GitHub Pages 永久免费托管。

---

## 2. 仓库结构建议

建议按照年份或类别组织你的 PPT，例如：

```text
Presentation/
├── Conference/
│   ├── 2024/
│   │   └── MyTalk/         # 一个 Slidev 项目
│   │       ├── slides.md
│   │       └── ...
│   └── 2025/
├── Other/
│   └── 2026/
│       └── otree_hosting/  # 另一个 Slidev 项目
│           ├── slides.md
│           └── ...
└── .github/
    └── workflows/
        └── deploy.yml      # 全自动部署脚本
```

---

## 3. 设置 GitHub Pages (重要!)

在开始之前，必须先设置仓库：

1.  进入你的 GitHub 仓库页面。
2.  点击 **Settings** (设置) -> 左侧菜单 **Pages**。
3.  在 **Build and deployment** 下：
    *   **Source**: 选择 **GitHub Actions** (不要选 Deploy from a branch)。
    *   保存。

---

## 4. 部署脚本 (`.github/workflows/deploy.yml`)

将以下内容保存到仓库的 `.github/workflows/deploy.yml` 文件中。

**当你要添加新的 PPT 时，只需要复制并修改文件中的 `Build Logic` 部分即可。**

```yaml
name: Deploy Presentations

on:
  push:
    branches:
      - main
      - master
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Create Public Directory
        run: mkdir -p public

      # =======================================================
      # ⬇️ 这是一个 Slidev 项目的构建块 (复制这块来添加新PPT) ⬇️
      # =======================================================
      
      # [项目 1] otree_hosting
      - name: Install and Build otree_hosting
        # 1. 这里改成你 PPT 的文件夹路径
        working-directory: Other/2026/otree_hosting
        run: |
          npm install
          REPO_NAME=${{ github.event.repository.name }}
          # 2. 这里也要改成同样的路径 (注意前后都有斜杠 /)
          npx slidev build --out dist --base /${REPO_NAME}/Other/2026/otree_hosting/

      - name: Move otree_hosting to Public
        run: |
          # 3. 这里也是同样的路径
          mkdir -p public/Other/2026/otree_hosting
          cp -r Other/2026/otree_hosting/dist/* public/Other/2026/otree_hosting/
      
      # =======================================================
      # ⬆️ 复制结束 ⬆️
      # =======================================================


      # -----------------------------------------------------------------------
      # 自动生成索引页 (不需要修改)
      # -----------------------------------------------------------------------
      - name: Generate Landing Page
        run: |
          cat <<EOF > public/index.html
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Presentations</title>
              <style>
                  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 2rem; background: #f0f2f5; color: #1a1a1a; }
                  h1 { color: #2d3748; margin-bottom: 2rem; border-bottom: 2px solid #e2e8f0; padding-bottom: 1rem; }
                  .card { background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); margin-bottom: 1.5rem; transition: transform 0.2s, box-shadow 0.2s; }
                  .card:hover { transform: translateY(-2px); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05); }
                  .card a { text-decoration: none; color: inherit; display: block; }
                  .card-title { font-size: 1.25rem; font-weight: 600; color: #3182ce; margin-bottom: 0.5rem; }
                  .card-path { color: #718096; font-family: monospace; font-size: 0.9rem; }
              </style>
          </head>
          <body>
              <h1>Available Presentations</h1>
              <div id="list">
          EOF

          cd public
          find . -mindepth 2 -name "index.html" | sort | while read -r file; do
              clean_path=$(dirname "${file#./}")
              title=$(basename "$clean_path")
              echo "
              <div class='card'>
                  <a href='./$clean_path/'>
                      <div class='card-title'>$title</div>
                      <div class='card-path'>$clean_path</div>
                  </a>
              </div>" >> index.html
          done

          cat <<EOF >> index.html
              </div>
          </body>
          </html>
          EOF

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## 5. 如何添加新的 PPT？

假设你新建了一个 `Conference/2025/CoolTalk`。

1.  打开 `.github/workflows/deploy.yml`。
2.  复制一遍 `# [项目 1] otree_hosting` 到 `Move ...` 结束的那一段代码。
3.  把所有的 `Other/2026/otree_hosting` 全部替换为 `Conference/2025/CoolTalk`。
4.  提交代码 (`git push`)。

等待几分钟，对应的新卡片就会出现在你的主页上。
