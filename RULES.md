# No AI assistance in this project

This folder is used for live coding interviews (see the requirements comment at the top of
`src/DataTable.jsx`). Whoever is typing — you or the candidate — should not get help from
Copilot, Cursor's Tab/chat, Codeium, Tabnine, Amazon Q, ChatGPT, or any other AI coding tool while
working in here. The point of the exercise is to see the candidate's own ability.

## What's already configured (automatic, no action needed)

- **`.vscode/settings.json`** — disables GitHub Copilot completions and chat, and turns off
  `editor.inlineSuggest.enabled`, which is the underlying VS Code feature that most AI
  tab-completion tools (Copilot, Cursor Tab, Codeium, Tabnine, Amazon Q) render their ghost-text
  suggestions through. This does **not** touch normal, non-AI IntelliSense (autocomplete based on
  symbols already in the file) — that's expected, ordinary IDE behavior, not "AI usage."
- **`.vscode/extensions.json`** — marks common AI extensions as unwanted recommendations for this
  workspace, so VS Code doesn't prompt to install them here.
- **`.cursorrules`** and **`.cursor/rules/no-ai-assistance.mdc`** — if this folder is ever opened
  in Cursor instead of plain VS Code, both the legacy and current rule formats tell its AI not to
  offer completions or chat answers here.
- **`.cursorignore`** — keeps this whole folder out of Cursor's AI indexing/context entirely.

## What still needs a manual check before each interview

- **Cursor's own "Cursor Tab" feature** doesn't have a settings-file toggle I can be fully certain
  is respected across all Cursor versions — if you're using Cursor (not plain VS Code), open
  Cursor Settings → Features and confirm Tab completion is off, once per machine.
- **Any AI browser extension or system-wide autocomplete tool** (e.g. an OS-level AI assistant)
  isn't something a project file can reach — check nothing like that is active on your machine
  before sharing your screen.
- These settings apply only to whoever opens *this specific folder*. If the candidate is on a
  video call with remote control of your screen, they're using your VS Code with these settings
  already applied — good. If they ever open their own editor on their own machine, none of this
  reaches them, so keep the exercise on your shared screen only.
