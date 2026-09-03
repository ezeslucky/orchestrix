/**
 * Copyright (c) 2025-present Orchestrix Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

export const usePlatformOS = () => {
  const userAgent = window.navigator.userAgent;
  const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

  return { isMobile };
};
