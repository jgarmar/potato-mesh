# PotatoMesh Web Frontend

This directory contains the PotatoMesh web application frontend, which is being migrated from vanilla JavaScript to TypeScript + React + Tailwind CSS v3.

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Start Vite dev server (in one terminal)
npm run dev

# Start Ruby backend (in another terminal)
API_TOKEN=dev APP_ENV=development ./app.sh

# Open http://localhost:41447/
```

### Production Build

```bash
npm run build
```

This generates optimized assets in `dist/` which are served by the Ruby application.

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
├── views/index.erb           # ERB template (loads React app)
├── package.json              # Dependencies and scripts
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.js        # Tailwind theme
└── MIGRATION.md              # Migration documentation
```

## Available Scripts

- `npm run dev` - Start Vite dev server (port 5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm test` - Run tests with Vitest

## Migration Status

🚧 **Active Migration in Progress**

- ✅ Infrastructure complete (TypeScript, React, Tailwind, Vite)
- ✅ API integration working (`useNodes` hook)
- ✅ Theme system functional
- ⏳ Component migration (~20 modules remaining)

See `MIGRATION.md` and `SUMMARY.md` for detailed status.

## Technologies

- **React 19** - UI framework
- **TypeScript 5.9** - Type-safe JavaScript
- **Tailwind CSS v3** - Utility-first CSS (v4 planned after stable release)
- **Vite 6** - Build tool with HMR
- **Vitest** - Testing framework
- **Leaflet** - Map library (to be integrated)

## Backend Integration

The React app integrates with the Ruby/Sinatra backend:
- Configuration loaded via ERB template's `data-app-config` attribute
- API endpoints: `/api/nodes`, `/api/messages`, etc.
- Development mode proxies to Vite dev server
- Production mode serves optimized bundles

## Documentation

- `MIGRATION.md` - Migration guide and architecture
- `SUMMARY.md` - Complete migration summary
- `../README.md` - Main project README

## Notes

The original vanilla JavaScript implementation is preserved in `public/assets/js/` for reference during migration. Once migration is complete and verified, these can be removed.
