import {
  BaseFilter,
  DduItem,
  SourceOptions,
} from "https://deno.land/x/ddu_vim@v2.0.0/types.ts";
import { Denops } from "https://deno.land/x/ddu_vim@v2.0.0/deps.ts";

type Params = Record<never, never>;

export class Filter extends BaseFilter<Params> {
  // deno-lint-ignore require-await
  async filter(args: {
    denops: Denops;
    sourceOptions: SourceOptions;
    input: string;
    items: DduItem[];
  }): Promise<DduItem[]> {
    return Promise.resolve(args.items.sort(
      (a, b) => a.word.localeCompare(b.word),
    ));
  }

  params(): Params {
    return {};
  }
}
