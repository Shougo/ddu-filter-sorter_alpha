import {
  BaseFilter,
  DduItem,
} from "https://deno.land/x/ddu_vim@v4.1.0/types.ts";
import { Denops } from "https://deno.land/x/ddu_vim@v4.1.0/deps.ts";

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
