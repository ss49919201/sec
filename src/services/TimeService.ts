import { UnixTime } from "../models/UnixTime.js";

/**
 * 時間関連のサービスを提供するクラス
 */
export class TimeService {
  /**
   * 現在のUNIX時間を取得
   * @param useNanoseconds ナノ秒単位で取得するかどうか
   * @returns UNIX時間オブジェクト
   */
  getCurrentTime(useNanoseconds: boolean): UnixTime {
    return new UnixTime(useNanoseconds);
  }
}
