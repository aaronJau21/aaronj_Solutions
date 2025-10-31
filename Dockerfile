# === Etapa 1: Construcción del proyecto ===
FROM oven/bun:1 AS builder

WORKDIR /app

COPY bun.lock package.json ./

# Instalar dependencias sin caché para evitar omisiones de peer deps
RUN bun install --no-cache

COPY . .

RUN bun run build


# === Etapa 2: Imagen final de producción ===
FROM oven/bun:1 AS runner

WORKDIR /app

COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["bun", "run", ".output/server/index.mjs"]
