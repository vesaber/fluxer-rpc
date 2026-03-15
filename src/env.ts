import { createEnv } from "@t3-oss/env-core";
import { envSchema } from "./env-schema";

declare const IS_WINDOWS: true | undefined;
process.env.RUN_MODE = IS_WINDOWS ? "windows_exe" : process.env.RUN_MODE;

export const env = createEnv({
  server: envSchema,
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
