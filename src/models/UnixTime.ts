/**
 * UNIX時間を表すクラス
 */
export class UnixTime {
  private readonly timestamp: number | bigint;
  private readonly isNanoseconds: boolean;

  /**
   * コンストラクタ
   * @param isNanoseconds ナノ秒単位かどうか
   */
  constructor(isNanoseconds: boolean = false) {
    this.isNanoseconds = isNanoseconds;

    if (isNanoseconds) {
      // ナノ秒単位のUNIX時間
      this.timestamp = BigInt(Date.now()) * BigInt(1000000);
    } else {
      // 秒単位のUNIX時間
      this.timestamp = Math.floor(Date.now() / 1000);
    }
  }

  /**
   * 時間を文字列として取得
   * @returns 時間の文字列表現
   */
  toString(): string {
    return this.timestamp.toString();
  }
}
