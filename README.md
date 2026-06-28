# English AI Platform

A public profile website for **Nguyễn Mộng Hoà (Lucy)** and the foundation for a future
AI-powered English education platform.

## Current phase

Phase 1 is intentionally frontend-only. It presents teaching experience,
credentials, methods, courses, future product ideas, and contact information on
one responsive page.

Included:

- Next.js App Router, TypeScript, Tailwind CSS
- Config-driven profile content
- Responsive and accessible profile page
- SEO metadata, favicon, and generated Open Graph image
- Vercel Hobby deployment documentation

Not included:

- Backend, authentication, or database
- Supabase/PostgreSQL
- AI API calls or exercise generation
- Teacher dashboard, student exercises, or scoring

## Project structure

```text
apps/
  web/              Next.js profile website
  api/              Future FastAPI backend placeholder
packages/
  shared/           Future shared types/schema placeholder
docs/
  architecture.md   System boundaries and scaling direction
  deployment.md     Local and Vercel deployment guide
  roadmap.md        Post-profile product phases
```

## Run locally

Requirements: Node.js 20.9 or newer and npm.

```bash
cd apps/web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
cd apps/web
npm run lint
npm run build
```

## Edit profile content

Update these files before publishing:

- `apps/web/src/config/profile.ts` — bio, credentials, experience, courses, and contact
- `apps/web/src/config/site.ts` — site identity, URL, and social links
- `apps/web/src/config/navigation.ts` — navigation labels and anchors

The current credentials and contact address are sample content and must be
confirmed or replaced before the public deployment.

See [docs/deployment.md](docs/deployment.md) for the Vercel Hobby setup.
