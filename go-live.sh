#!/usr/bin/env bash
# One command to publish RampUp to the public web via GitHub Pages.
# Run:  bash go-live.sh
set -e
cd "$(dirname "$0")"

echo "→ Creating public repo 'rampup' and pushing…"
gh repo create rampup --public --source=. --remote=origin \
  --description "RampUp — MCAT prep that plays like a game. Landing page + playable web app." --push

echo "→ Enabling GitHub Pages (main branch, root)…"
gh api -X POST "repos/melchi-1234/rampup/pages" \
  -f "source[branch]=main" -f "source[path]=/" 2>/dev/null || \
  echo "  (If this errored, enable Pages once in Settings → Pages → Deploy from branch → main → /root.)"

echo ""
echo "✅ Done. Your site will be live in ~1 minute at:"
echo "     https://melchi-1234.github.io/rampup/          (landing page)"
echo "     https://melchi-1234.github.io/rampup/app/      (play the app)"
