/**
 * Copyright (c) 2026-present OrchestrixSoftware, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import type { TInstanceAuthenticationMethodKeys } from "@orchestrix/types";

export type TGetAuthenticationModeProps = {
  disabled: boolean;
  updateConfig: (key: TInstanceAuthenticationMethodKeys, value: string) => void;
  resolvedTheme: string | undefined;
};
