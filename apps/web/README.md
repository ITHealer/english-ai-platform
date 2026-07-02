# Web app

The Phase 1 Next.js frontend for the English AI Platform.

## Scripts

```bash
npm run dev      # local development
npm run lint     # ESLint
npm run build    # optimized production build
npm run start    # serve a completed production build
```

## Content

Editable content is centralized in `src/config/profile.ts`, `courses.ts`,
`testimonials.ts`, and `contact.ts`. Site metadata and external links live in
`src/config/site.ts`. Keep reusable presentation in `src/components` and avoid
moving future business logic into this app.

## Environment

No environment variables are required for local development. After deploying,
`NEXT_PUBLIC_SITE_URL` can be set to the final HTTPS URL so canonical and Open
Graph metadata use the production domain.
