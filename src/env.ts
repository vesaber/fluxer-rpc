import { createEnv } from "@t3-oss/env-core";
import { envSchema } from "./env-schema";

export const env = createEnv({
  server: envSchema,
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
