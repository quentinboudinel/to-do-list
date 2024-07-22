FROM oven/bun:1.1.20-alpine AS build-stage
WORKDIR /usr/src/to-do-list

COPY package.json bun.lockb .
RUN bun install --frozen-lockfile --production
COPY . .
RUN bun run build

FROM oven/bun:1.1.20-alpine AS runtime-stage
WORKDIR /var/www/to-do-list
COPY --from=build-stage /usr/src/to-do-list/.output .

USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "server/index.mjs" ]
