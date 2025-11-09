# Repository Guidelines

## Project Structure & Module Organization
Astro 5 drives the site, so treat everything under `src/` as source and assume `dist/` is disposable build output. Author or edit routes in `src/pages` (e.g., `src/pages/blog/[slug].astro`) and share UI in `src/components`. Content collections live in `src/content/blog`, typed by `src/content.config.ts`; keep frontmatter aligned with the schema before committing. Layout shells sit in `src/layouts`, theme tokens in `src/styles`, and static assets that must keep their original file names belong in `public/`. Use `src/consts.ts` for shared constants instead of duplicating values across pages.

## Build, Test, and Development Commands
- `npm install`: install or refresh dependencies defined in `package.json`.
- `npm run dev`: launch Astro’s dev server at `http://localhost:4321` with hot reload.
- `npm run build`: generate the production bundle into `dist/` and surfaces most content errors.
- `npm run preview`: serve the built output locally to verify routing and RSS before pushing.
- `npm run astro -- check`: type-check `.astro`, `.ts`, and MDX frontmatter using Astro’s checker.

## Coding Style & Naming Conventions
Favor TypeScript modules, ES modules, and Astro components written with 2-space indentation. Name components with PascalCase (`ArticleCard.astro`), page files with kebab-case route names, and content slugs that mirror the final URL (`2024-vision.md`). Export a single default page component per `.astro` file and keep helper utilities in colocated `.ts` modules. Run your editor’s Astro/Prettier integration before committing; avoid manual formatting of generated Markdown tables. Keep imports sorted: framework packages first, then absolute aliases, then relative paths.

## Testing Guidelines
There is no dedicated test runner yet, so rely on `npm run astro -- check`, `npm run build`, and `npm run preview` as the minimum validation. When adding MD/MDX posts, run `npm run astro -- check` to confirm schema compliance and verify dates render correctly in the blog index. If you add client-side scripts or critical layout changes, supplement with manual Lighthouse runs or Playwright smoke tests stored under `src/tests` once introduced.

## Commit & Pull Request Guidelines
Git history currently follows concise, capitalized summaries (e.g., “Add hero layout”). Keep subject lines under 72 characters, use the imperative mood, and mention scope when helpful (`blog: add pagination`). For pull requests, provide: a summary of the change, screenshots or `npm run preview` GIFs for UI work, test notes (commands run), and links to any related issues. Always mention new content collections or schema updates in the description so reviewers know to regenerate content caches.
