# ARTi Internship Product Experience Flow

A lightweight mobile-first static page for ARTi user-growth internship candidates.

## What it does

- Step 1: candidates open ARTi and complete the product experience
- Step 2: candidates upload one experience screenshot
- After upload, the formal internship application entry is revealed
- Includes a scannable QR code that points to the application link

## Live links used in the page

- Invite: https://www.artifin.ai/invite/REF-D2D1D54E
- Application: https://www.artifin.ai/join/social-media-intern

## Files

- `index.html` — the candidate-facing page
- `assets/application-qr.svg` — generated QR code for the application URL
- `.nojekyll` — GitHub Pages compatibility helper

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://127.0.0.1:8000/`.
