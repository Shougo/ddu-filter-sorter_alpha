import type { DduItem } from "@shougo/ddu-vim/types";
import { BaseFilter } from "@shougo/ddu-vim/filter";

import type { Denops } from "@denops/std";

type Params = Record<string, never>;

export class Filter extends BaseFilter<Params> {
  override filter(args: {
    denops: Denops;
    items: DduItem[];
  }): Promise<DduItem[]> {
    return Promise.resolve(args.items.sort(
      (a, b) => a.word.localeCompare(b.word),
    ));
  }

  override params(): Params {
    return {};
  }
}
