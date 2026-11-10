# Complete Construction deployment export

Existing live website: https://completeconstructionwintersville.netlify.app
Selected GitHub repository: https://github.com/liftswebdesign/complete-construction

## What was preserved

`site/` is an unmodified copy of every file in the uploaded `website-preview (4).zip`, including HTML, compiled JavaScript and CSS, all images, both image README files, `_headers`, and `_redirects`. `docs/IMPORTED-FILES.json` records each imported file's size and SHA-256. No uploaded files were removed or rewritten. The original repository README is retained, with transfer documentation appended.

The export's JavaScript, CSS, and images were compared byte-for-byte with the published Netlify assets before transfer. Netlify injects hosting markup into the served HTML; the original uploaded HTML is retained without that injection.

## Important source limitation

The ZIP is a deployment export. It does not contain the original React components, source stylesheet, package.json, project-images mapping/provenance JSON, original build configuration, or the screenshots mentioned by its image README files. Those references in the supplied README files are preserved, but the referenced source files were not supplied.

The package.json and scripts/build.mjs in this repository are new deployment scaffolding. They copy the existing export to dist and verify every copied file byte-for-byte. They do not recreate or recompile the application. `npm install` and `npm run build` therefore verify this copy-only deployment pipeline, not the original React/Vite build. For convenient component-level edits in Codex, obtain the original project source and add it through a reviewed change after confirming it reproduces this export.

## Build locally

Use Node.js 20 or later:

```sh
npm install
npm run build
```

No third-party packages are required. The resulting dist folder is ready to deploy.

## Link the existing Netlify site without changing its URL

1. Sign in to Netlify and open the existing project with URL **completeconstructionwintersville.netlify.app**. Confirm this is the existing project rather than creating a new one.
2. Go to **Project configuration → Developer settings → Continuous deployment → Repository** (some dashboard layouts call this Build & deploy → Continuous deployment).
3. Choose **Link repository**. If already linked elsewhere, choose **Manage repository → Link to a different repository**. Select GitHub → **liftswebdesign/complete-construction**, the repository selected by the requester. Grant the Netlify GitHub App access to this repository if necessary.
4. Set production branch **main**, base directory **repository root** (blank), build command **npm run build**, publish directory **dist**, and a compatible Node version (20 or later). The root netlify.toml declares the build and publish settings.
5. Keep the existing Netlify project name, domains, environment variables, access controls, and other configuration. This preserves **https://completeconstructionwintersville.netlify.app**. Trigger a production deploy and verify navigation, gallery/lightbox and mobile layout at the existing URL.
6. Once linked, pushes to main will build and deploy automatically to that same site. Open this GitHub repository in Codex for future work.

The supplied `_headers` includes `Content-Security-Policy: form-action 'none'` and `X-Robots-Tag: noindex, nofollow`. They are preserved exactly, as are the existing contact behavior and demonstration labeling. This transfer does not change form delivery or verify successful submissions.

The Netlify dashboard repository link has not been configured by this session: GitHub access is available, but authenticated Netlify account access is not. Complete the steps above in your own account. Merely pushing to GitHub does not establish the Netlify link.

Official repository-linking documentation: https://docs.netlify.com/build/git-workflows/repo-permissions-linking/
