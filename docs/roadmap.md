# Product roadmap

Phase 1 deliberately ends with the public profile. Later phases should start
only after the profile content is accurate and the Vercel deployment is stable.

## Phase 2 — FastAPI foundation

- Create the real `apps/api` application
- Add health checks, configuration, logging, and CORS
- Deploy the API independently and connect one harmless frontend request

## Phase 3 — Data and authentication

- Design teacher, exercise set, student attempt, and result models
- Add PostgreSQL/Supabase and migrations
- Add teacher authentication and authorization boundaries

## Phase 4 — AI exercise generation

- Define versioned JSON schemas for exercises
- Build teacher prompt and preview flows
- Validate AI output before storage or display
- Add provider observability, limits, and failure handling

## Phase 5 — Student exercise links

- Add public exercise routes with safe share slugs
- Render questions, collect answers, score supported types, and store attempts
- Add clear completion and feedback states

## Phase 6 — Teacher dashboard

- Manage exercises and classes
- Review student attempts and common mistakes
- Track progress and export results

PDF/audio materials, IELTS Reading/Listening workflows, and advanced analytics
belong after the core create-share-attempt-result loop is reliable.

