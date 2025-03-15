/**
 * コマンドライン引数を解析するクラス
 */
export class CommandLineParser {
  private readonly args: string[];

  /**
   * コンストラクタ
   * @param args コマンドライン引数
   */
  constructor(args: string[] = process.argv.slice(2)) {
    this.args = args;
  }

  /**
   * ナノ秒オプションが指定されているかどうかを確認
   * @returns ナノ秒オプションが指定されている場合はtrue
   */
  hasNanosecondsOption(): boolean {
    return this.args.includes("ns");
  }
}
