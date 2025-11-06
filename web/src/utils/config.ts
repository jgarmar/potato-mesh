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

import { AppConfig } from '../types';

const DEFAULT_CONFIG: AppConfig = {
  refreshMs: 60_000,
  refreshIntervalSeconds: 60,
  chatEnabled: true,
  channel: '#LongFast',
  frequency: '915MHz',
  contactLink: '#potatomesh:dod.ngo',
  contactLinkUrl: 'https://matrix.to/#/#potatomesh:dod.ngo',
  mapCenter: { lat: 38.761944, lon: -27.090833 },
  maxDistanceKm: 42,
  tileFilters: {
    light: 'grayscale(1) saturate(0) brightness(0.92) contrast(1.05)',
    dark: 'grayscale(1) invert(1) brightness(0.9) contrast(1.08)',
  },
  siteName: 'PotatoMesh Demo',
  privateMode: false,
  federationEnabled: true,
};

export function readAppConfig(): Partial<AppConfig> {
  const el = document.querySelector('[data-app-config]');
  if (!el) {
    return {};
  }
  const raw = el.getAttribute('data-app-config') || '';
  if (!raw) {
    return {};
  }
  try {
    const parsed = JSON.parse(raw);
    return typeof parsed === 'object' && parsed !== null ? parsed : {};
  } catch (err) {
    console.error('Failed to parse application configuration', err);
    return {};
  }
}

export function mergeConfig(raw: Partial<AppConfig>): AppConfig {
  const config = { ...DEFAULT_CONFIG, ...(raw || {}) };
  config.mapCenter = {
    lat: Number(raw?.mapCenter?.lat ?? DEFAULT_CONFIG.mapCenter.lat),
    lon: Number(raw?.mapCenter?.lon ?? DEFAULT_CONFIG.mapCenter.lon),
  };
  config.tileFilters = {
    light: raw?.tileFilters?.light || DEFAULT_CONFIG.tileFilters.light,
    dark: raw?.tileFilters?.dark || DEFAULT_CONFIG.tileFilters.dark,
  };
  const refreshIntervalSeconds = Number(
    raw?.refreshIntervalSeconds ?? DEFAULT_CONFIG.refreshIntervalSeconds
  );
  config.refreshIntervalSeconds = Number.isFinite(refreshIntervalSeconds)
    ? refreshIntervalSeconds
    : DEFAULT_CONFIG.refreshIntervalSeconds;
  const refreshMs = Number(raw?.refreshMs ?? config.refreshIntervalSeconds * 1000);
  config.refreshMs = Number.isFinite(refreshMs) ? refreshMs : DEFAULT_CONFIG.refreshMs;
  config.chatEnabled = Boolean(raw?.chatEnabled ?? DEFAULT_CONFIG.chatEnabled);
  config.channel = raw?.channel || DEFAULT_CONFIG.channel;
  config.frequency = raw?.frequency || DEFAULT_CONFIG.frequency;
  config.contactLink = raw?.contactLink || DEFAULT_CONFIG.contactLink;
  config.contactLinkUrl = raw?.contactLinkUrl ?? DEFAULT_CONFIG.contactLinkUrl;
  const maxDistance = Number(raw?.maxDistanceKm ?? DEFAULT_CONFIG.maxDistanceKm);
  config.maxDistanceKm = Number.isFinite(maxDistance)
    ? maxDistance
    : DEFAULT_CONFIG.maxDistanceKm;
  return config;
}
