#!/usr/bin/env bash
# Gitav web — push helper
# Uso: bash push.sh
set -e

REPO_URL="https://github.com/1000Feet/gitavweb.git"
BRANCH="main"

cd "$(dirname "$0")"
echo "→ Cartella: $(pwd)"

# 1. Init git se serve
if [ ! -d .git ]; then
  echo "→ git init"
  git init
fi

# 2. Branch main
git branch -M "$BRANCH" 2>/dev/null || true

# 3. Remote origin
if git remote | grep -q "^origin$"; then
  git remote set-url origin "$REPO_URL"
else
  git remote add origin "$REPO_URL"
fi
echo "→ Remote: $(git remote get-url origin)"

# 4. Stage + commit
git add -A
if git diff --cached --quiet; then
  echo "→ Niente da committare (già tutto aggiornato)"
else
  git commit -m "Gitav landing pages — 8 strutture bilingue"
  echo "→ Commit creato"
fi

# 5. Push (force perché il repo remoto era vuoto con solo README)
echo "→ Pushing a $REPO_URL ..."
echo "   Se ti chiede username/password:"
echo "   - username: il tuo GitHub username (es. 1000Feet)"
echo "   - password: un Personal Access Token (NON la password classica)"
echo "     crealo qui → https://github.com/settings/tokens  (spunta 'repo')"
echo ""
git push -u origin "$BRANCH" --force

echo ""
echo "✅ Fatto! Ora vai su https://lovable.dev, New project → Import from GitHub"
echo "   e seleziona 1000Feet/gitavweb"
