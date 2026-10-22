# Luan Trindade — Personal site

A personal blog and portfolio about practical AI, support engineering,
automation, and building useful systems. Built with Next.js and designed with
an editorial-minimalist direction inspired by OpenDesign's
`web-prototype-taste-editorial` and `blog-post` templates.

## Getting Started

Install dependencies and start the local development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The main page is in
`app/page.tsx`; shared article metadata lives in `lib/posts.ts`, and individual
articles are under `app/blog/`.

The production build exports a static site to `out/`, including
`sitemap.xml` and `robots.txt`.

## Deploying to Hostinger

Hostinger is configured to deploy this site when changes are pushed to `main`.
In VS Code, open **Terminal → Run Task → Deploy to Hostinger** (or run the
`Deploy to Hostinger` task from the Command Palette). The task asks for a commit
message, runs `npm run build` and `npm run lint`, stages and commits changes,
then pushes to `origin/main`. It stops if the checks fail, the current branch
is not `main`, or `origin` is not `luaantrindade/myblog`.

The task confirms when GitHub accepts the push, but it cannot read Hostinger's
deployment status. Check the deployment log in [Hostinger hPanel](https://hpanel.hostinger.com/).
You can also use VS Code's built-in Source Control panel to stage, commit, and
push manually.

Keep production environment variables in Hostinger's website settings; never
commit them to GitHub. `.env*` files are ignored by this repository. For local
development, create an untracked `.env.local` with the values your app needs.

To bind a keyboard shortcut, open **Preferences: Open Keyboard Shortcuts
(JSON)** in VS Code and add:

```json
{
  "key": "cmd+shift+d",
  "command": "workbench.action.tasks.runTask",
  "args": "Deploy to Hostinger"
}
```

The recommended extensions are ESLint (`dbaeumer.vscode-eslint`) and GitHub
Actions (`github.vscode-github-actions`). Git integration is built into VS Code.
# Trigger rebuild Fri Oct  2 17:02:25 UTC 2026
# Trigger rebuild
# Footer UX fix - removed test text
