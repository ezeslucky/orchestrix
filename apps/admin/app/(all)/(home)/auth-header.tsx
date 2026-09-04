/**
 * Copyright (c) 2026-present OrchestrixSoftware, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import Link from "next/link";
import { OrchestrixLockup } from "@/components/common/orchestrix-lockup";

export function AuthHeader() {
  return (
    <div className="sticky top-0 flex w-full flex-shrink-0 items-center justify-between gap-6">
      <Link href="/">
        <OrchestrixLockup height={20} width={95} className="text-primary" />
      </Link>
    </div>
  );
}
