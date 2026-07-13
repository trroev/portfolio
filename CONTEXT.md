# trevormathiak.dev

The website for **trroev development** — Trevor Mathiak's personal developer brand, hosted at trevormathiak.dev. A multi-page marketing site whose job is to build professional credibility, with a dedicated portfolio page used for job applications.

## Language

**trroev development**:
Trevor Mathiak's personal developer brand. An aspirational practice (no active client roster yet); the site exists to establish credibility and present professionally, not to convert an existing client pipeline. Presented person-forward — copy is first-person ("I'm Trevor"); "trroev development" appears as the wordmark/umbrella name, not as a "we".
_Avoid_: agency, company, freelance business (overstates current reality)

**Marketing site**:
The primary experience — the multi-page site that sells trroev development to its main audience. Distinct from the portfolio page.
_Avoid_: landing page (it is no longer a single page)

**Portfolio**:
A dedicated page at `/portfolio`, aimed at recruiters and hiring managers, linked from job applications. A distinct audience and purpose from the marketing site.
_Avoid_: projects section, home page

**Project**:
A single curated piece of work shown on the portfolio as a card (title, description, tech, links, screenshot) that links out to a live URL and/or repo. Content managed in the CMS. Never embedded/hosted inside this app.
_Avoid_: demo, app, mini-app (the old hosted subpages are retired)

**Page content**:
The editable copy and media for the marketing pages (Home, About, Services), managed in the CMS as globals/collections so the site can change without a deploy.
_Avoid_: hardcoded copy

**Admin**:
The single CMS user (Trevor) with access to the Payload admin panel to edit projects and page content. There are no public/end-user accounts.
_Avoid_: user, account (nothing public-facing)
