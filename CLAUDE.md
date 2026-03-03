# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog ("Machine Dreams") built with Astro 5 using the AstroPaper theme. Uses Tailwind CSS v4, TypeScript, and Markdown for content. Deployed at machinedreams.blog.

## Commands

- **Dev server:** `pnpm dev`
- **Build:** `pnpm build` (runs astro check + astro build + pagefind indexing)
- **Lint:** `pnpm lint` (ESLint with `no-console` rule enforced)
- **Format check:** `pnpm format:check`
- **Format fix:** `pnpm format`
- **Preview built site:** `pnpm preview`

Package manager is **pnpm** (v10, see CI config). There are no tests.

## Architecture

### Content System

Blog posts live in `src/data/blog/` as Markdown files. The content schema is defined in `src/content.config.ts` with required fields: `title`, `pubDatetime`, `description`, `tags`. Posts with `draft: true` are hidden in production but visible in dev. Scheduled posts use `pubDatetime` with a 15-minute margin (`SITE.scheduledPostMargin`).

### Key Config Files

- `src/config.ts` — Site-wide settings (SITE object): author, title, URL, pagination, OG image, timezone
- `src/constants.ts` — Social links and share link definitions
- `astro.config.ts` — Astro config with remark plugins (TOC, collapse), Shiki code highlighting with diff/highlight transformers, Tailwind via Vite plugin

### Routing (src/pages/)

Astro file-based routing. Dynamic routes use `[...slug]` and `[...page]` patterns for blog posts, tags, and pagination. OG images are generated dynamically via `og.png.ts` and `posts/[...slug]/index.png.ts` using Satori + resvg.

### Styling

Tailwind CSS v4 with `@tailwindcss/typography`. Styles in `src/styles/global.css` and `src/styles/typography.css`. Prettier is configured with `prettier-plugin-astro` and `prettier-plugin-tailwindcss`.

### Path Alias

`@/*` maps to `./src/*` (configured in tsconfig.json).

## CI

GitHub Actions runs on PRs: lint, format check, and full build (Node 20, pnpm).
