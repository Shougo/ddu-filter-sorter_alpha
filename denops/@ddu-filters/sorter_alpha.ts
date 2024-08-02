import {
  BaseFilter,
  type DduItem,
} from "jsr:@shougo/ddu-vim@^5.0.0/types";

import type { Denops } from "jsr:@denops/core@^7.0.0";

type Params = Record<string, never>;

export class Filter extends BaseFilter<Params> {
  override filter(args: {
    denops: Denops;
    items: DduItem[];
  }): Promise<DduItem[]> {
    return Promise.resolve(args.items.sort(
      (a, b) => (a.word).localeCompare((b.word)),
    ));
  }

  override params(): Params {
    return {};
  }
}
