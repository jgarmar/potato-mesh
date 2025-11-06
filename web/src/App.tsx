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

import { useState, useEffect } from 'react';
import { readAppConfig, mergeConfig } from './utils/config';
import { useNodes } from './hooks/useNodes';

function App() {
  const [config] = useState(() => mergeConfig(readAppConfig()));
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const { nodes, isLoading, error, fetchNodes } = useNodes();

  useEffect(() => {
    fetchNodes();
    // Auto-refresh every config.refreshMs
    const interval = setInterval(fetchNodes, config.refreshMs);
    return () => clearInterval(interval);
  }, [fetchNodes, config.refreshMs]);

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
            <h2 className="text-xl font-semibold mb-2">Migration Demo</h2>
            <p className="mb-4 text-muted-light dark:text-muted-dark">
              This application is being migrated to TypeScript, React, and Tailwind CSS v3.
            </p>
            <div className="space-y-2">
              <div><strong>Channel:</strong> {config.channel}</div>
              <div><strong>Frequency:</strong> {config.frequency}</div>
              <div><strong>Map Center:</strong> {config.mapCenter.lat}, {config.mapCenter.lon}</div>
              <div><strong>Max Distance:</strong> {config.maxDistanceKm} km</div>
              <div><strong>Active Nodes:</strong> {isLoading ? 'Loading...' : nodes.length}</div>
            </div>
          </div>

          {error && (
            <div className="bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-400 px-4 py-3 rounded mb-4">
              <strong>Error:</strong> {error}
            </div>
          )}

          <div className="bg-bg2-light dark:bg-bg2-dark rounded-lg p-6 mb-4 border border-black/8 dark:border-white/10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Nodes ({nodes.length})</h2>
              <button
                onClick={fetchNodes}
                disabled={isLoading}
                className="px-4 py-2 rounded bg-accent-light dark:bg-accent-dark text-white hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isLoading ? 'Refreshing...' : 'Refresh'}
              </button>
            </div>
            
            {nodes.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-black/5 dark:bg-white/5">
                    <tr>
                      <th className="px-4 py-2 text-left">Node ID</th>
                      <th className="px-4 py-2 text-left">Short Name</th>
                      <th className="px-4 py-2 text-left">Long Name</th>
                      <th className="px-4 py-2 text-left">Role</th>
                      <th className="px-4 py-2 text-left">Battery</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nodes.map((node, idx) => (
                      <tr key={node.node_id || idx} className="border-t border-black/8 dark:border-white/10">
                        <td className="px-4 py-2 font-mono text-xs">{node.node_id || 'N/A'}</td>
                        <td className="px-4 py-2">{node.short_name || 'N/A'}</td>
                        <td className="px-4 py-2">{node.long_name || 'N/A'}</td>
                        <td className="px-4 py-2">{node.role || 'N/A'}</td>
                        <td className="px-4 py-2">
                          {node.battery_level !== undefined ? `${node.battery_level}%` : 'N/A'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-muted-light dark:text-muted-dark">
                {isLoading ? 'Loading nodes...' : 'No nodes found.'}
              </p>
            )}
          </div>

          <div className="bg-bg2-light dark:bg-bg2-dark rounded-lg p-6 border border-black/8 dark:border-white/10">
            <h2 className="text-xl font-semibold mb-4">Migration Status</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>✅ TypeScript configuration set up</li>
              <li>✅ React installed and configured</li>
              <li>✅ Tailwind CSS v3 installed (v4 has alpha compatibility issues)</li>
              <li>✅ Vite build system configured</li>
              <li>✅ Theme toggle working with Tailwind classes</li>
              <li>✅ API integration with backend (demonstrated above)</li>
              <li>⏳ Map component with Leaflet</li>
              <li>⏳ Chat log component</li>
              <li>⏳ Full nodes table with sorting and filtering</li>
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
