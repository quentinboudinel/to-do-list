FROM oven/bun:1-alpine AS base

FROM base AS install
WORKDIR /usr/src
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile --production
COPY . .
RUN bun run build

FROM base AS release
WORKDIR /var/www
COPY --from=install /usr/src/.output .output

USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", ".output/server/index.mjs" ]
