# Deploy the profile website to Vercel Hobby

## 1. Verify locally

Use Node.js 20.9 or newer.

```bash
cd apps/web
npm install
npm run lint
npm run build
```

Before publishing, replace the sample credentials, email, and social links in
`src/config/profile.ts` and `src/config/site.ts`.

## 2. Push the repository

Commit the monorepo and push its production branch to GitHub, GitLab, or
Bitbucket. A typical GitHub flow is:

```bash
git add .
git commit -m "feat: build profile landing page"
git push origin main
```

## 3. Import into Vercel

1. Sign in to Vercel and select **Add New... → Project**.
2. Import the Git repository.
3. In project configuration, edit **Root Directory** and select `apps/web`.
4. Confirm the framework preset is **Next.js**.
5. Keep the detected defaults:
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: automatic
6. Deploy.

Suggested project name: `english-ai-platform-web`.

The Root Directory is essential: Vercel must build `apps/web`, not the monorepo
root. No backend project should be created in this phase.

## 4. Configure the public URL

The first deployment receives an HTTPS `*.vercel.app` URL. Add it as an
environment variable in **Project Settings → Environment Variables**:

```text
NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app
```

Apply it to Production (and Preview if desired), then redeploy so canonical and
social metadata use the real URL. This variable is optional for the first build;
the app has no secrets and needs no other environment variables.

## 5. Verify production

- Open `/` over HTTPS on desktop and mobile.
- Confirm navigation, course, contact, favicon, and 404 behavior.
- Share the URL in a private chat and check the Open Graph preview.
- Confirm that the displayed credentials and contact details are accurate.

## 6. Add a custom domain later

Open **Project Settings → Domains**, add the domain, and follow Vercel's DNS
instructions. Then update `NEXT_PUBLIC_SITE_URL` to the custom HTTPS domain and
redeploy.

Vercel automatically creates deployments from connected Git pushes. Pull
requests can be checked using preview deployments before changes reach the
production branch.

