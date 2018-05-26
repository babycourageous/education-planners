import { spawn } from "child_process";
import log from "fancy-log";
import colors from "ansi-colors";

/**
 * Adapted from https://github.com/shakyShane/jekyll-gulp-sass-browser-sync
 *
 */
const jekyll = done =>
  spawn("jekyll", ["build", "--incremental"], {
    stdio: "inherit"
  })
    .on("error", error => log(colors.red(error.message)))
    .on("close", done);

const jekyllserve = done =>
  spawn(
    "jekyll",
    ["build", "--config=_config.yml,_config-dev.yml", "--incremental"],
    { stdio: "inherit" }
  )
    .on("error", error => log(colors.red(error.message)))
    .on("close", done);

export { jekyll, jekyllserve };
