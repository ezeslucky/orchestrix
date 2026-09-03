/**
 * Copyright (c) 2025-present Orchestrix Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import type { Text as MDASTText } from "mdast";

export const createTextNode = (value: string): MDASTText => ({
  type: "text",
  value,
});
