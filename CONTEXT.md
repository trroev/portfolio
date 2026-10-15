# trevormathiak.dev

The website for **trroev development** — Trevor Mathiak's personal developer brand, hosted at trevormathiak.dev. A multi-page marketing site whose job is to build professional credibility, with a dedicated portfolio page used for job applications.

## Language

**trroev development**:
Trevor Mathiak's personal developer brand. A solo practice taking on its first client work; the site exists to establish credibility and present professionally to prospective clients and employers. Presented person-forward — copy is first-person ("I'm Trevor"); "trroev development" appears as the wordmark/umbrella name, not as a "we".
_Avoid_: agency, company, freelance business (overstates current reality)

**Marketing site**:
The primary experience — the multi-page site that sells trroev development to its main audience. Distinct from the portfolio page.
_Avoid_: landing page (it is no longer a single page)

**Portfolio**:
A dedicated page at `/portfolio`, aimed at recruiters and hiring managers, linked from job applications. A distinct audience and purpose from the marketing site.
_Avoid_: projects section, home page

**Project**:
A single curated piece of work shown on the portfolio as a card (title, description, tech, links, screenshot) that links out to a live URL and/or repo. Authored alongside the site's source. Never embedded/hosted inside this app.
_Avoid_: demo, app, mini-app (the old hosted subpages are retired)

**Page**:
A routed page of the site (home, about, services, portfolio, contact), composed of blocks. Every public route is a page. Pages are authored alongside the site's source; adding or changing one is a commit and a deploy — there is no editing UI.
_Avoid_: global (the old one-document-per-page model)

**Block**:
A reusable content section a page is built from (hero, page intro, feature list, project showcase, story, CTA band, contact form). The unit of page composition: a page is a sequence of blocks, each given its own copy.
_Avoid_: section (ambiguous), widget

**Project showcase**:
The block that displays projects from the Projects collection — all of them on the portfolio, a featured subset on the home page. Projects are referenced, never duplicated into page content.
_Avoid_: projects block (collides with the Project term)

**Site chrome**:
The header navigation and footer (nav links, CTA, social links). Nav links point at pages, not raw URLs. The wordmark is brand identity, not chrome content, and lives in code.
_Avoid_: layout content
