/**
 * Copyright (c) 2025-present Orchestrix Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

export enum ECodeBlockAttributeNames {
  ID = "id",
  LANGUAGE = "language",
}

export type TCodeBlockAttributes = {
  [ECodeBlockAttributeNames.ID]: string | null;
  [ECodeBlockAttributeNames.LANGUAGE]: string | null;
};
