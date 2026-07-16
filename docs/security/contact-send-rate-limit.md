# Contact send endpoint abuse protection

The contact form's send endpoint (`POST /contact/send`) sends an email per request, so it is protected by two layers: a hidden honeypot field (silent bot drop, application code) and a per-IP Vercel WAF rate limit (this document).

## WAF rule: "Rate limit contact send"

| Setting | Value |
| --- | --- |
| Conditions | `path` equals `/contact/send` AND `method` equals `POST` |
| Action | `rate_limit` |
| Window | 60 seconds (fixed window) |
| Max requests | 5 per window |
| Counting key | `ip` |
| If exceeded | `rate_limit` (HTTP 429) |

A legitimate visitor sends at most one or two messages in a minute, so 5/60s per IP leaves generous headroom while stopping scripted floods. When the limit trips, the client shows a "please wait a minute and try again" message (`src/features/contact/api/send-message.ts` handles the 429).

Note: WAF rate-limit counters are per Vercel region, so a distributed client could exceed the limit by roughly the number of regions — acceptable for this endpoint's purpose (protecting email quota and the admin inbox from floods).

## Managing the rule

The rule lives in the Vercel project (`portfolio-flyx`), not in code. To recreate or adjust it:

```bash
vercel firewall rules add "Rate limit contact send" \
  --condition '{"type":"path","op":"eq","value":"/contact/send"}' \
  --condition '{"type":"method","op":"eq","value":"POST"}' \
  --action rate_limit \
  --rate-limit-window 60 \
  --rate-limit-requests 5 \
  --rate-limit-keys ip \
  --rate-limit-action rate_limit \
  --yes
```

Rule changes are staged as drafts; review with `vercel firewall diff` and apply with `vercel firewall publish --yes`. Inspect the live rule with `vercel firewall rules inspect "Rate limit contact send" --expand`.

## Honeypot

The form includes a visually hidden `botField` input (`aria-hidden`, `tabIndex={-1}`, `autoComplete="off"`, positioned off-screen) that visitors and assistive technology never see. If a submission arrives with it filled, the endpoint returns `{ ok: true }` without sending an email, so bots get no signal that they were filtered. The check runs before schema validation (`isBotSubmission` in `src/features/contact/server/is-bot-submission.ts`).
