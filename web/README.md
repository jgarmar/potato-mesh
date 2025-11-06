# PotatoMesh Web Frontend

A modern React application for visualizing Meshtastic mesh networks, built with TypeScript and Tailwind CSS.

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Start Vite dev server
npm run dev

# Open http://localhost:5173/
```

### Production Build

```bash
npm run build
```

This generates optimized assets in `dist/` ready for deployment.

## Project Structure

```
web/
├── src/                      # React/TypeScript source
│   ├── hooks/                # Custom React hooks
│   ├── utils/                # Utility functions
│   ├── components/           # React components (TODO)
│   ├── App.tsx               # Root component
│   ├── main.tsx              # Entry point
│   ├── app.css               # Tailwind imports
│   └── types.ts              # TypeScript types
├── dist/                     # Build output (gitignored)
├── public/                   # Static assets
├── package.json              # Dependencies and scripts
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
└── tailwind.config.js        # Tailwind theme
```

## Available Scripts

- `npm run dev` - Start Vite dev server (port 5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm test` - Run tests with Vitest

## Migration Status

🚧 **Active Development**

- ✅ Infrastructure complete (TypeScript, React, Tailwind, Vite)
- ✅ API integration ready
- ✅ Theme system functional
- ⏳ Component migration (~20 modules remaining)

See `MIGRATION.md` for detailed status.

## Technologies

- **React 19** - UI framework
- **TypeScript 5.9** - Type-safe JavaScript
- **Tailwind CSS v3** - Utility-first CSS
- **Vite 6** - Build tool with HMR
- **Vitest** - Testing framework
- **Leaflet** - Map library (to be integrated)

## Deployment

After building with `npm run build`, deploy the `dist/` directory to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any web server (nginx, Apache, etc.)

The app is a pure client-side React application with no backend dependencies.
