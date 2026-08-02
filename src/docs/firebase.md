---
title: Firebase Hosting
---

The starter ships deploy configurations for Netlify and Vercel, and with `firebase.json` also for [Firebase Hosting](https://firebase.google.com/docs/hosting). It mirrors the same headers and caching rules as the other two platforms.

Deploy manually with the Firebase CLI:

```bash
npm run build
npx firebase-tools deploy --only hosting
```

### Preview deploys per pull request

The workflow in `.github/workflows/firebase-preview.yml` deploys every pull request to a [preview channel](https://firebase.google.com/docs/hosting/test-preview-deploy) and comments the url on the pull request, similar to Netlify's deploy previews. Previews expire after seven days.

The workflow stays inactive until you configure your repository on GitHub:

- repository variable `FIREBASE_PROJECT_ID`: your Firebase project id
- repository secret `FIREBASE_SERVICE_ACCOUNT`: a service account key. Running `firebase init hosting:github` once creates it for you
- optional repository variable `SITE_URL`: your production url, used for absolute urls in feeds, the sitemap and social metadata

One thing to be aware of: the 301 redirects demo uses Netlify's `_redirects` file. On Firebase, redirects are declared in `firebase.json` instead.
