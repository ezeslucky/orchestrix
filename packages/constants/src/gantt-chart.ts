/**
 * Copyright (c) 2025-present Orchestrix Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import type { TIssueRelationTypes } from "@orchestrix/types";

export const REVERSE_RELATIONS: { [key in TIssueRelationTypes]: TIssueRelationTypes } = {
  blocked_by: "blocking",
  blocking: "blocked_by",
  relates_to: "relates_to",
  duplicate: "duplicate",
};
