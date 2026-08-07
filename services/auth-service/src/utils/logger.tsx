import { createLogger } from "@chatapp/common";
import type { Logger } from "@chatapp/common";

export const logger: Logger = createLogger({
  name: "auth-services",
});
