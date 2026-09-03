/**
 * Copyright (c) 2025-present Orchestrix Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

// imports
import type { EIssuesStoreType, TWorkItemFilterExpression, TWorkItemFilterProperty } from "@orchestrix/types";
// local imports
import type { IFilterInstance } from "../rich-filters";

export type TWorkItemFilterKey = `${EIssuesStoreType}-${string}`;

export type IWorkItemFilterInstance = IFilterInstance<TWorkItemFilterProperty, TWorkItemFilterExpression>;
