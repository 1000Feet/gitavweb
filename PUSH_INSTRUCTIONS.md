# Come caricare il progetto su GitHub

Il progetto è pronto, il commit è stato fatto **localmente** ma non ho potuto
fare il `git push` perché non avevo le credenziali GitHub. Ecco come finirlo tu
in 2 minuti.

## Opzione A — dal terminale (più veloce)

Apri un Terminal nella cartella `gitavweb` (`cd` qui) ed esegui:

```bash
git init
git add -A
git commit -m "Gitav landing pages — 8 strutture"
git branch -M main
git remote add origin https://github.com/1000Feet/gitavweb.git
git push -u origin main --force
```

Se ti viene chiesto utente/password, usa **username GitHub** +
**personal access token** (GitHub non accetta più la password classica).
Per crearne uno: https://github.com/settings/tokens → "Generate new token
(classic)" → spunta `repo` → copia il token e incollalo come password.

> ⚠️ Il `--force` sovrascrive il repo remoto vuoto che era lì prima.
> Usalo solo la prima volta.

## Opzione B — GitHub Desktop

1. Apri GitHub Desktop
2. File → Add local repository → seleziona la cartella `gitavweb`
3. Publish repository → scegli `1000Feet/gitavweb`

## Poi su Lovable.dev

Vai su https://lovable.dev → New project → "Import from GitHub" →
seleziona `1000Feet/gitavweb` → Lovable farà il deploy automaticamente.

## Struttura finale

- `/` — Homepage con le 8 card
- `/ilgabbiano`, `/argentario`, `/california`, `/clubdegliamici`,
  `/lecannelle`, `/lemarze`, `/osaresort`, `/talamone` — Landing page dedicate
- Bilingue IT/EN, responsive mobile + desktop
- Stack Lovable-compatibile: Vite + React + TS + Tailwind
