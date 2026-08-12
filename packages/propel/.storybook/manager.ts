//

import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

const orchestrixTheme = create({
  base: "dark",
  brandTitle: "orchestrix UI",
  brandUrl: " ",
  brandImage: "orchestrix-lockup-light.svg",
  brandTarget: "_self",
});

addons.setConfig({
  theme: orchestrixTheme,
});
