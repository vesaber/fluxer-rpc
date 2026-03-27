import { createEnv } from "@t3-oss/env-core";
import { envSchema } from "./env-schema";
import { join } from "node:path";
import { config } from "dotenv";
import { genExampleEnv } from "../scripts/generate-default-env";
import open from "open";
import { existsSync } from "node:fs";
import { hexToTerminal, Logger } from "./logger";

export const logger = new Logger(`${hexToTerminal("#ff0")}[env]${Logger.resetColor}`);

declare const IS_WINDOWS: true | undefined;
if (typeof IS_WINDOWS !== "undefined")
  process.env.RUN_MODE = IS_WINDOWS ? "windows_exe" : process.env.RUN_MODE;

export const envPathIfWindows = join(
  process.env.LOCALAPPDATA ?? "",
  "fluxer-rpc",
  ".env",
);

if (process.env.RUN_MODE === "windows_exe") {
  if (existsSync(envPathIfWindows)) {
    config({ path: envPathIfWindows, quiet: true });
  } else {
    /* create with default values */
    const defaultEnv = genExampleEnv();
    await Bun.file(envPathIfWindows).write(defaultEnv);
    open(envPathIfWindows);
    process.exit(0);
  }
}

function checkDeprecatedVars() {
  if (env.MUSIC_APPS !== undefined) {
    logger.warn(
      "MUSIC_APPS is deprecated, it now automatically detects all music apps. It has no effect and should be removed.",
    );
  }

  if (env.ROUND_TO_5_SECONDS !== undefined) {
    logger.warn(
      "ROUND_TO_5_SECONDS is deprecated. It still works, but ROUND_TO_SECONDS should be used instead to avoid changes in future updates.",
    );
  }
}

const runtimeEnv = Object.fromEntries(
  Object.entries(process.env).map(([k, v]) => [
    k,
    typeof v === "string" ? v.replace(/^"|"$/g, "") : v,
  ]),
);

export const env = createEnv({
  server: envSchema,
  runtimeEnv,
  emptyStringAsUndefined: true,
});

export function isLastFmEnabled() {
  return env.LASTFM_USER && env.LASTFM_KEY;
}

checkDeprecatedVars();
