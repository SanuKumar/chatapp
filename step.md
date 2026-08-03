# initialilze the pnpm
pnpm init

# install the dev dependicies without warning
 pnpm i -D typescript @types/node tsx nodemon prettier @eslint/js @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint   -w

 pnpm add zod pino --filter common