#!/usr/bin/env node -r ts-node/register

// コマンドライン引数をチェック
const args = process.argv.slice(2);
const useNanoseconds = args.includes("ns");

if (useNanoseconds) {
  // ナノ秒単位のUNIX時間
  // Date.now()はミリ秒単位なので、10^6を掛けてナノ秒に変換
  const timeInNanoseconds = BigInt(Date.now()) * BigInt(1000000);
  console.log(timeInNanoseconds.toString());
} else {
  // 秒単位のUNIX時間
  const timeInSeconds = Math.floor(Date.now() / 1000);
  console.log(timeInSeconds);
}
