# Frontend Migration to TypeScript, React, and Tailwind CSS

## Overview

This document describes the ongoing migration of the PotatoMesh web frontend from vanilla JavaScript to TypeScript, React, and Tailwind CSS v3.

## Current Status

### ✅ Completed

- **TypeScript Setup**: Configured TypeScript compiler with strict mode and ES2020 target
- **React Integration**: Installed React 19 and configured with Vite build system
- **Tailwind CSS v3**: Configured Tailwind CSS v3 with PostCSS (v4 has alpha compatibility issues)
- **Vite Build System**: Set up Vite for fast development and optimized production builds
- **Configuration Utilities**: Ported app configuration reading/merging logic to TypeScript
- **Template Integration**: Updated ERB template to serve React app in both development and production modes
- **Build Verification**: Confirmed production builds work correctly with manifest generation

### ⏳ In Progress / TODO

- **Component Migration**: Port ~20+ vanilla JS modules to React TypeScript components
- **CSS Migration**: Convert all custom CSS to Tailwind utility classes
- **Test Migration**: Port JavaScript tests from Node.js test runner to Vitest
- **API Integration**: Connect React components to existing Ruby backend APIs
- **Feature Parity**: Implement all existing features (map, chat, nodes table, filters, etc.)

## Architecture

### Development Mode

In development (`RACK_ENV=development` or `APP_ENV=development`):
- Vite dev server runs on port 5173
- ERB template loads scripts from `http://localhost:5173/`
- Hot module replacement (HMR) enabled for instant updates
- Source maps enabled for debugging

### Production Mode

In production:
- Vite builds optimized bundles to `web/dist/`
- ERB template reads manifest from `web/dist/.vite/manifest.json`
- Assets served with cache headers from `/dist/` path
- Code splitting and minification applied

## Directory Structure

```
web/
├── src/                    # TypeScript React source code
│   ├── components/         # React components (TODO)
│   ├── hooks/              # Custom React hooks (TODO)
│   ├── utils/              # Utility functions
│   │   └── config.ts       # App configuration
│   ├── App.tsx             # Root React component
│   ├── main.tsx            # Entry point
│   ├── app.css             # Tailwind CSS imports
│   └── types.ts            # TypeScript type definitions
├── dist/                   # Build output (gitignored)
├── public/                 # Static assets (preserved from original)
├── views/
│   └── index.erb           # Updated ERB template
├── package.json            # Node dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── postcss.config.js       # PostCSS configuration
```

## Development Workflow

### Prerequisites

```bash
cd web
npm install
```

### Running in Development

1. Start Vite dev server:
   ```bash
   npm run dev
   ```

2. In a separate terminal, start Ruby server:
   ```bash
   API_TOKEN=dev APP_ENV=development ./app.sh
   ```

3. Open http://localhost:41447/

### Building for Production

```bash
npm run build
```

This generates optimized assets in `web/dist/`.

### Running Tests

```bash
npm test
```

## Tailwind CSS v4 Note

The initial requirement was to use Tailwind CSS v4, but v4 is currently in alpha and has compatibility issues with the Vite plugin (build error: "Cannot convert undefined or null to object"). We're using Tailwind v3.4+ instead, which provides all the modern utility-first CSS features in a production-ready package.

When Tailwind v4 reaches stable release, migration should be straightforward.

## Migration Strategy

The migration is being done incrementally:

1. ✅ Set up build tooling and infrastructure
2. ⏳ Create basic React app structure
3. ⏳ Port core components one-by-one
4. ⏳ Migrate CSS to Tailwind classes
5. ⏳ Port tests to Vitest
6. ⏳ Test and verify all features work

## Original Files Preserved

- `web/views/index.erb.backup` - Original ERB template with vanilla JS
- `web/public/assets/js/` - Original JavaScript modules (for reference during migration)
- `web/public/assets/styles/` - Original CSS (for reference during migration)

These can be removed once migration is complete and verified.
