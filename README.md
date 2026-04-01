# Likhith Portfolio

A cinematic portfolio web experience for Likhith, built with React, TypeScript, GSAP, and React Three Fiber.

The project combines scroll-driven storytelling, custom motion effects, and interactive 3D scenes to showcase editing work and creative identity.

## Highlights

- Cinematic landing experience with animated intro transitions
- Interactive 3D character section using React Three Fiber and Three.js
- Motion-heavy UI powered by GSAP and custom animation utilities
- Responsive sections for about, work, software stack, and contact
- Custom cursor and hover interactions for editorial feel

## Tech Stack

- React 18 + TypeScript
- Vite 5
- GSAP (+ @gsap/react)
- Three.js + @react-three/fiber + @react-three/drei
- @react-three/rapier for physics behavior
- Vanilla CSS modules by section/component

## Prerequisites

- Node.js 18+
- npm 9+

## Local Development

1. Clone the repository:

```bash
git clone https://github.com/gurudeepdeeps/likhith-portfolio.git
cd likhith-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm run dev
```

The Vite dev server runs with host exposure (`vite --host`) so it can be accessed from your local network if needed.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Type-check and create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint checks

## Project Structure

```text
src/
   components/
      Character/        # 3D scene, character setup, animation + input utils
      styles/           # Section-level CSS files
      *.tsx             # UI sections (Landing, About, Work, Contact, etc.)
   context/            # React context providers
   data/               # Static animation/bone metadata
   App.tsx             # Main page composition
   main.tsx            # App bootstrap
public/
   images/             # Public image assets
   models/             # Encrypted/packaged 3D model assets
   draco/              # Draco decoder files
```

## Assets and Notes

- 3D models and environment assets are served from `public/models`.
- Draco decoder files are included under `public/draco` for model compression support.
- If premium GSAP plugins are used in your environment, ensure your license/compliance setup is correct before commercial deployment.

## Deployment

Build the project:

```bash
npm run build
```

Then deploy the generated `dist` folder to any static hosting platform (for example: Vercel, Netlify, Cloudflare Pages, or GitHub Pages).

## License

See the `LICENSE` file for licensing details.
