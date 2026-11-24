# Nihal — Portfolio Website

A responsive, dark-premium personal portfolio built with plain HTML, CSS, and JavaScript. No build tools or framework required.

## Files

- `index.html` — page structure and content
- `styles.css` — responsive design, layout, colors, animations
- `script.js` — mobile navigation and live GitHub profile/repository data
- `README-GITHUB.md` — copy this content into your GitHub profile repository's `README.md`

## Run locally

1. Extract the ZIP.
2. Open `index.html` in a browser.

For a local development server, use VS Code's Live Server extension, or run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Personalize before publishing

Search `index.html` and update:
- `YOUR_EMAIL@example.com` with your real professional email.
- `https://www.linkedin.com/` with your actual LinkedIn profile URL.
- Project descriptions and repository links to match your real public work.

The portfolio currently uses the LifeBlood project details provided in the conversation context. Keep those details only if they accurately describe work you completed. Do not claim skills or project outcomes you cannot explain in an interview.

The GitHub stats are loaded live from the public GitHub API for `nihal090748`. The API is unauthenticated and rate-limited; if it is unavailable, the rest of the site still works.

## Publish with GitHub Pages

1. Create a new public repository, for example `nihal-portfolio`.
2. Upload `index.html`, `styles.css`, and `script.js` to the repository root.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Wait for GitHub Pages to publish. Your site URL will be shown in the Pages settings, typically:
   `https://nihal090748.github.io/nihal-portfolio/`

## Set up your GitHub profile README

1. Create a public repository with the exact name `nihal090748`.
2. Add the file `README.md` to the repository root.
3. Copy the contents of `README-GITHUB.md` into that `README.md`.
4. Commit the file. GitHub will display it on your profile page.

If a repository with that exact name already exists, edit its existing `README.md` instead of creating another repository.

## Optional custom domain

In **Settings → Pages**, add a domain you own, then follow GitHub's DNS instructions. Do not add a domain you do not control.

## Accessibility and maintenance

- Navigation works on mobile and desktop.
- Links that open new tabs use `rel="noreferrer"`.
- GitHub repository names are escaped before insertion into the page.
- Update project cards as you publish real projects.
