#!/usr/bin/env bash
# Copy the 10 AI skills into a target project as Claude Code skills.
# Usage: ./install.sh /path/to/your/project
set -euo pipefail

TARGET="${1:-}"
if [[ -z "$TARGET" ]]; then
  echo "Usage: ./install.sh /path/to/your/project"
  exit 1
fi
if [[ ! -d "$TARGET" ]]; then
  echo "Not a directory: $TARGET"
  exit 1
fi

SRC_DIR="$(cd "$(dirname "$0")" && pwd)/04-ai-skills"
DEST_DIR="$TARGET/.claude/skills"
mkdir -p "$DEST_DIR"

count=0
for f in "$SRC_DIR"/*.md; do
  base="$(basename "$f" .md)"
  [[ "$base" == "README" ]] && continue
  mkdir -p "$DEST_DIR/$base"
  cp "$f" "$DEST_DIR/$base/SKILL.md"
  count=$((count + 1))
  echo "  + $base"
done

echo ""
echo "Installed $count skills into $DEST_DIR"
echo "Open Claude Code in $TARGET and try:  /validate-idea"
