#!/usr/bin/env node -r ts-node/register

import { CommandLineParser } from "./cli/CommandLineParser.js";
import { TimeService } from "./services/TimeService.js";

/**
 * CLIアプリケーションのメインクラス
 */
class UnixTimeApp {
  private readonly parser: CommandLineParser;
  private readonly timeService: TimeService;

  /**
   * コンストラクタ
   */
  constructor() {
    this.parser = new CommandLineParser();
    this.timeService = new TimeService();
  }

  /**
   * アプリケーションを実行
   */
  run(): void {
    const useNanoseconds = this.parser.hasNanosecondsOption();
    const time = this.timeService.getCurrentTime(useNanoseconds);
    console.log(time.toString());
  }
}

// アプリケーションを実行
const app = new UnixTimeApp();
app.run();
