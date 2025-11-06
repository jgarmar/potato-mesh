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

export function getConfig(): AppConfig {
  return DEFAULT_CONFIG;
}
