//

//
import type { ADDITIONAL_EXTENSIONS } from "@orchestrix/utils";
import { CORE_EXTENSIONS } from "@orchestrix/utils";
// editor imports
import type { ExtensionFileSetStorageKey } from "@/orchestrix-editor/types/storage";

export type NodeFileMapType = Partial<
  Record<
    CORE_EXTENSIONS | ADDITIONAL_EXTENSIONS,
    {
      fileSetName: ExtensionFileSetStorageKey;
    }
  >
>;

export const NODE_FILE_MAP: NodeFileMapType = {
  [CORE_EXTENSIONS.IMAGE]: {
    fileSetName: "deletedImageSet",
  },
  [CORE_EXTENSIONS.CUSTOM_IMAGE]: {
    fileSetName: "deletedImageSet",
  },
};
