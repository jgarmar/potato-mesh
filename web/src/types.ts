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

export interface AppConfig {
  refreshMs: number;
  refreshIntervalSeconds: number;
  chatEnabled: boolean;
  channel: string;
  frequency: string;
  contactLink: string;
  contactLinkUrl: string | null;
  mapCenter: { lat: number; lon: number };
  maxDistanceKm: number;
  tileFilters: { light: string; dark: string };
  siteName: string;
  privateMod: boolean;
  federationEnabled: boolean;
  version?: string;
}

export interface Node {
  node_id: string;
  short_name?: string;
  long_name?: string;
  last_heard?: number;
  role?: string;
  hw_model?: string;
  battery_level?: number;
  voltage?: number;
  uptime_seconds?: number;
  channel_utilization?: number;
  air_util_tx?: number;
  temperature?: number;
  relative_humidity?: number;
  barometric_pressure?: number;
  latitude?: number;
  longitude?: number;
  altitude?: number;
  position_time?: number;
}

export interface Message {
  id: string;
  from: string;
  to: string;
  text: string;
  timestamp: number;
  channel?: number;
}
