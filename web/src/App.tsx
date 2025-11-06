/*
 * Copyright (C) 2025 l5yth
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useState } from 'react';
import { getConfig } from './utils/config';

function App() {
  const [config] = useState(getConfig);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    document.body.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-bg-light dark:bg-bg-dark text-fg-light dark:text-fg-dark transition-colors">
        <header className="p-4 border-b border-black/8 dark:border-white/10">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-3">
              <img src="/potatomesh-logo.svg" alt="" className="h-8 w-8" />
              <h1 className="text-2xl font-bold">{config.siteName}</h1>
            </div>
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded bg-accent-light dark:bg-accent-dark text-white hover:opacity-90 transition-opacity"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'} Toggle Theme
            </button>
          </div>
        </header>

        <main className="p-4 max-w-7xl mx-auto">
          <div className="bg-bg2-light dark:bg-bg2-dark rounded-lg p-6 mb-4 border border-black/8 dark:border-white/10">
            <h2 className="text-xl font-semibold mb-2">PotatoMesh</h2>
            <p className="mb-4 text-muted-light dark:text-muted-dark">
              A modern React application for visualizing Meshtastic mesh networks.
            </p>
            <div className="space-y-2">
              <div><strong>Channel:</strong> {config.channel}</div>
              <div><strong>Frequency:</strong> {config.frequency}</div>
              <div><strong>Map Center:</strong> {config.mapCenter.lat}, {config.mapCenter.lon}</div>
              <div><strong>Max Distance:</strong> {config.maxDistanceKm} km</div>
            </div>
          </div>

          <div className="bg-bg2-light dark:bg-bg2-dark rounded-lg p-6 border border-black/8 dark:border-white/10">
            <h2 className="text-xl font-semibold mb-4">Status</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>✅ TypeScript configuration set up</li>
              <li>✅ React 19 installed and configured</li>
              <li>✅ Tailwind CSS v3 installed and working</li>
              <li>✅ Vite build system configured</li>
              <li>✅ Theme toggle working with Tailwind classes</li>
              <li>✅ Standalone React app (no backend required)</li>
              <li>⏳ Map component with Leaflet integration</li>
              <li>⏳ Chat log component</li>
              <li>⏳ Nodes table component</li>
              <li>⏳ Remaining components...</li>
            </ul>
          </div>
        </main>

        <footer className="p-4 text-center text-sm text-muted-light dark:text-muted-dark border-t border-black/8 dark:border-white/10 mt-8">
          <div className="max-w-7xl mx-auto">
            <span className="font-semibold">PotatoMesh</span>
            {config.version && <span className="mx-2">{config.version}</span>}
            <span className="mx-2">—</span>
            <span>
              GitHub: <a href="https://github.com/l5yth/potato-mesh" target="_blank" rel="noopener noreferrer" className="text-accent-light dark:text-accent-dark hover:underline">l5yth/potato-mesh</a>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
