import pino from "pino";
import type { Logger, LoggerOptions } from "pino";

type CreateLoggerOptions = LoggerOptions & {
  name?: string;
};

export const createLogger = (options: CreateLoggerOptions): Logger => {
  const { name, ...res } = options;

  const transport = process.env.NODE_ENV === "development";
};
