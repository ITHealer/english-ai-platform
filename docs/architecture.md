# Architecture

## Phase 1 boundary

The current product is a statically rendered Next.js profile page. It has no
server-side business workflow and no persistent data.

```text
Browser
  -> Next.js page at /
  -> typed profile/site config
  -> reusable presentation components
```

`apps/web` owns the UI and public metadata. `apps/api` and `packages/shared` are
placeholders only; they do not participate in the build.

## Why this structure

- Profile copy is separate from presentation, so it can later come from a CMS
  or database without redesigning every component.
- The frontend is deployable independently on Vercel.
- A future FastAPI service can be added without mixing AI, scoring, and database
  concerns into React components.
- Shared schemas get a dedicated package only when two real applications need
  them; there is no workspace tooling before that need exists.

## Future boundary

```text
Next.js web
  -> public profile, teacher UI, student exercise UI

FastAPI API
  -> AI generation, scoring, file/audio processing, business rules

PostgreSQL/Supabase
  -> users, exercise sets, attempts, results, stored assets
```

Auth, API clients, database schemas, queues, and AI provider abstractions should
be introduced in the phase that first needs them, not in the profile phase.

