/**
 * Copyright (c) 2026-present OrchestrixSoftware, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import { createContext } from "react";
// admin store
import { RootStore } from "../store/root.store";

export const rootStore = new RootStore();

export const StoreContext = createContext<RootStore | undefined>(undefined);
