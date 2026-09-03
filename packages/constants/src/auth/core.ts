/**
 * Copyright (c) 2025-present Orchestrix Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import type { TCoreLoginMediums } from "@orchestrix/types";

export const CORE_LOGIN_MEDIUM_LABELS: Record<TCoreLoginMediums, string> = {
  email: "Email",
  "magic-code": "Magic code",
  github: "GitHub",
  gitlab: "GitLab",
  google: "Google",
  gitea: "Gitea",
};
