# CAB Lab website — Base44-independent version

This is a static React/Vite version of the CAB Lab website. Base44 backend functions, authentication, applicant storage, and Base44-hosted media references have been removed.

## Images

Copy the following files into `public/images/` exactly as named:

- cab-lab-logo.png
- home-capstone.jpg
- home-fea.png
- home-footwear.jpg
- home-hero.png
- home-implant-design.jpg
- home-implant-fea.jpg
- home-obesity.jpg
- industry-li-ning.png
- research-cfd.png
- research-footwear.jpg
- research-implant-design.jpg
- research-smart-insole.png
- research-spinal.jpg
- research-teaching-lab.jpg
- tao-liu.jpg
- team-barker.jpg
- team-hannah.jpg
- team-kexin.jpg
- wind-tunnel-cyclist.jpg
- wind-tunnel-wingsuit.jpg
- wind-tunnel.jpg

The application/contact workflow now uses direct email links to `tao.liu@ontariotechu.net`.

## Local test

```bash
npm install
npm run dev
```

For a production build:

```bash
npm ci
npm run build
```

The production output is placed in `dist/`.

## GitHub Pages deployment

A GitHub Actions workflow is already included at `.github/workflows/deploy.yml`.

For the simplest setup, create a public repository named `<YOUR-GITHUB-USERNAME>.github.io`, upload this project's contents to the repository root, and push to the `main` branch. In GitHub, open **Settings > Pages** and set **Source** to **GitHub Actions**. The workflow will build and deploy the site automatically.

The workflow also creates a `404.html` SPA fallback so React routes such as `/research` and `/join-the-lab` can load when visited directly.

## Custom domain

Once the GitHub Pages site is working, open **Settings > Pages > Custom domain** and enter `tao-liu.com`. Update DNS at the company where the domain is registered according to the exact DNS values GitHub displays. Keep Base44 DNS records in place until the GitHub copy has been verified and you are ready to switch over.
