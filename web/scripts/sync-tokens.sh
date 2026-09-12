#!/usr/bin/env bash
# Copies the canonical design tokens (repo root tokens/*.css) into this
# app's src/styles/tokens/ so Turbopack can resolve them without crossing
# the project's filesystem root. typography.css is NOT copied verbatim —
# its @font-face url()s are rewritten to /fonts/... (see globals.css note).
set -euo pipefail
cd "$(dirname "$0")/.."
ROOT="../tokens"
DEST="src/styles/tokens"
for f in colors spacing layout base; do
  cp "$ROOT/$f.css" "$DEST/$f.css"
done
echo "Synced colors.css, spacing.css, layout.css, base.css from $ROOT to $DEST."
echo "typography.css was not touched — it has app-specific font url() paths; edit it by hand if the token values change."
