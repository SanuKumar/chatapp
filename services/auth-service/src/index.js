import { createApp } from "@app";
import { createServer } from "http";
import { logger } from "@utils/logger";
import { env } from "@config/env";

const main = async () => {
  try {
    const app = createApp();
    const server = createServer(app);

    const port = env.AUTH_SERVICE_PORT;

    server.listen(port, () => {
      logger.info({ port }, "Auth service is running...");
    });
  } catch (error) {
    logger.error({ error }, "Failed to start auth service..");
    process.exit(1);
  }
};

void main();
