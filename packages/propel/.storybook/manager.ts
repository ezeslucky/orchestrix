/**
 * Copyright (c) 2025-present Orchestrix Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

const orchestrixTheme = create({
  base: "dark",
  brandTitle: "orchestrix UI",
  brandUrl: "https:// ",
  brandImage: "orchestrix-lockup-light.svg",
  brandTarget: "_self",
});

addons.setConfig({
  theme: orchestrixTheme,
});
