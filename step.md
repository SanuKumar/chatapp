# initialilze the pnpm
pnpm init

# install the dev dependicies without warning
 pnpm i -D typescript @types/node tsx nodemon prettier @eslint/js @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint   -w

 pnpm add zod pino --filter common

 pnpm --filter ./services/auth-service add express

 pnpm i -D @types/express --filter ./services/auth-service

 pnpm i pino-pretty --filter ./packages/common 


# run the application
pnpm run dev --filter ./services/auth-service