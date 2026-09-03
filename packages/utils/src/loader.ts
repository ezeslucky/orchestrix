/**
 * Copyright (c) 2025-present Orchestrix Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import type { TLoader } from "@orchestrix/types";

// checks if a loader has finished initialization
export const isLoaderReady = (loader: TLoader | undefined) => loader !== "init-loader";
