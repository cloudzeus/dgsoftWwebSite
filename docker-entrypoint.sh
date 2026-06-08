#!/bin/sh
# Runtime entrypoint for the Next.js standalone container.
# Syncs the database schema to match prisma/schema.prisma, then starts the server.
# Runs on every deploy/restart; `db push` is a no-op when the schema already matches.
set -e

echo "→ Syncing database schema (prisma db push)…"
# --skip-generate: the client is already generated in the image.
# No --accept-data-loss: a destructive change fails the boot loudly instead of dropping data.
node node_modules/prisma/build/index.js db push --skip-generate

echo "→ Starting Next.js server…"
exec node server.js
