# Hafizur Rahman — Personal Portfolio

A premium, single-page personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. Fully static — no backend, no database, no server-side API.

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS with a CSS-variable-based dark/light theme system
- **UI Primitives:** Radix UI (Dialog), custom component library
- **Icons:** Lucide React
- **Animation:** Framer Motion
- **Hosting:** Cloudflare Pages

## Getting Started

### 1. Install Node.js LTS

Download and install the current LTS release from [nodejs.org](https://nodejs.org/).

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

### 4. Build for production

```bash
npm run build
```

Output is generated in the `dist/` directory.

### 5. Preview the production build

```bash
npm run preview
```

### 6. Lint and type-check

```bash
npm run lint
tsc -b --noEmit
```

## Deploying to Cloudflare Pages

### Create a GitHub repository

1. Initialize git (if not already): `git init`
2. Create a new repository on GitHub and push this project:
   ```bash
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

### Connect GitHub to Cloudflare Pages

1. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com/).
2. Go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select your GitHub repository.

### Configure build settings

| Setting | Value |
|---|---|
| Framework preset | Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |

No environment variables or secrets are required.

### Deploy

Click **Save and Deploy**. Cloudflare Pages will build and deploy the site automatically on every push to `main`.

### Connect a custom domain

Once deployed, go to your Pages project → **Custom domains** → **Set up a custom domain**, and follow the prompts to point your domain's DNS to Cloudflare.

## Updating Portfolio Content

All content lives in `src/data/` as typed TypeScript files — no need to touch component code to update text.

| File | Controls |
|---|---|
| `src/data/profile.ts` | Name, title, bio, badges, contact info |
| `src/data/experience.ts` | Career timeline entries |
| `src/data/skills.ts` | Technical expertise categories |
| `src/data/projects.ts` | Featured projects |
| `src/data/education.ts` | Education history |
| `src/data/capabilities.ts` | Engineering capabilities section |
| `src/data/values.ts` | Professional values |
| `src/data/navigation.ts` | Navigation menu items |

### Replacing the CV PDF

Place your CV at:

```
public/files/Hafizur_Rahman_CV.pdf
```

The Download CV buttons in the navigation and hero section link to this path automatically.

### Replacing the profile image

Add your photograph at:

```
public/images/hafizur-rahman.jpg
```

(The hero section currently uses an abstract code-themed visual in place of a photo. Wire up an `<img>` tag pointing to this path in `src/sections/HeroSection.tsx` once you have a real photograph.)

### Updating project details

Edit the `projects` array in `src/data/projects.ts`. Each project supports:

- `title`, `category`, `status` (`'Professional Experience' | 'In Development' | 'Demo Content'`)
- `description` (card summary) and `longDescription` (dialog detail view)
- `technologies`, `highlights`, `architectureNote`
- Optional `githubUrl` / `liveUrl`

Entries marked `status: 'Demo Content'` display a **DEMO CONTENT** badge and should be replaced with real project information when available.

## Project Structure

```
src/
  App.tsx                 Root component — composes all sections
  main.tsx                Entry point
  index.css               Theme variables, base styles, utilities
  data/                   Centralized content (see table above)
  types/                  Shared TypeScript interfaces
  hooks/                  useTheme, useActiveSection
  lib/utils.ts            cn() class helper, scrollToSection()
  components/
    ui/                   Button, Badge, Dialog primitives
    common/                SectionHeading, ThemeToggle, SocialLinks, TechBadge, Container
    navigation/            Navigation bar
  sections/                One component per page section (Hero, About, Expertise, ...)
public/
  files/                   CV PDF goes here
  images/                  Profile photo goes here
```

## Remaining TODOs (require your input)

- [ ] Add `public/files/Hafizur_Rahman_CV.pdf` (real CV)
- [ ] Add `public/images/hafizur-rahman.jpg` and wire it into the Hero section
- [ ] Review the "Enterprise Management Application" project entry in `src/data/projects.ts` — it is marked `Demo Content` and should be replaced or removed
- [ ] Add GitHub/live URLs to projects where available
- [ ] Set your final canonical domain in any future `<link rel="canonical">` once a domain is purchased
