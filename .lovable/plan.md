## Goal
Wire the Contact form to send enquiries to **madanlepcha@gmail.com** using [FormSubmit](https://formsubmit.co) — no backend, no Lovable Cloud, works fine on Cloudflare Pages or any static host.

## How FormSubmit works
- You POST the form to `https://formsubmit.co/madanlepcha@gmail.com` (or an obfuscated token URL after the first activation email).
- On the very first submission, FormSubmit sends a confirmation email to madanlepcha@gmail.com — the link in it must be clicked once to activate. After that, every submission is delivered to the inbox.
- Free, no API key, supports honeypot + captcha + custom subject + redirect.

## Changes
**Edit `src/routes/contact.tsx`** — replace the current local-only `onSubmit` with a real `fetch` POST to FormSubmit using JSON:

- Endpoint: `https://formsubmit.co/ajax/madanlepcha@gmail.com`
- Send all current fields: name, email, phone, date, venue, guests, message
- Extra FormSubmit fields:
  - `_subject`: "New Starshots enquiry from {name}"
  - `_template`: "table" (nice formatted email)
  - `_captcha`: "false" (or leave true if you want spam protection)
  - `_honey`: hidden honeypot input for spam
- On success → keep existing "thank you" state.
- On failure → show inline error message, allow retry.
- Add a loading state on the submit button.

**No other files change.** No new packages, no env vars, no backend.

## After deploy
1. Submit the form once on the live site.
2. Open the confirmation email in madanlepcha@gmail.com and click **Activate**.
3. All future submissions land in the inbox.

## Cloudflare Pages note
Fully compatible — FormSubmit is a third-party HTTPS endpoint, so it works from any static or edge-hosted site including Cloudflare Pages and the current Lovable Workers deploy.
