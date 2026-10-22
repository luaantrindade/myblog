#!/usr/bin/env bash
set -euo pipefail

fail() {
  printf 'Deploy stopped: %s\n' "$*" >&2
  exit 1
}

repo_root="$(git rev-parse --show-toplevel 2>/dev/null)" \
  || fail "run this from inside the myblog Git repository."
cd "$repo_root"

message="${1:-}"
[[ -n "${message//[[:space:]]/}" ]] || fail "a commit message is required."

branch="$(git branch --show-current)"
[[ "$branch" == "main" ]] || fail "current branch is '$branch'; switch to main before deploying."

remote_url="$(git remote get-url origin 2>/dev/null)" \
  || fail "the origin Git remote is not configured."
case "$remote_url" in
  https://github.com/luaantrindade/myblog.git|https://github.com/luaantrindade/myblog|git@github.com:luaantrindade/myblog.git|git@github.com:luaantrindade/myblog)
    ;;
  *)
    fail "origin is '$remote_url', not the expected GitHub repository luaantrindade/myblog."
    ;;
esac

if git ls-files | grep -Eq '(^|/)\.env([^/]*$|/)'; then
  fail "an environment file is tracked by Git; remove it from the index before deploying."
fi

printf 'Running production build...\n'
npm run build

printf '\nRunning ESLint...\n'
npm run lint

printf '\nStaging changes (Git-ignored environment files remain excluded)...\n'
git add -A
if git diff --cached --quiet; then
  fail "there are no staged changes to commit."
fi

printf '\nCreating commit...\n'
git commit -m "$message"

printf '\nPushing to origin/main...\n'
git push origin main

printf '\nGitHub accepted the push to main.\n'
printf 'Hostinger deployment runs separately and its status is not available to this task.\n'
printf 'Check the deployment log in Hostinger hPanel: https://hpanel.hostinger.com/\n'
