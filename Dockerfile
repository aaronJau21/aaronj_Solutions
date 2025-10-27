# === Etapa 1: Construcción del proyecto ===
FROM oven/bun:1 AS builder

WORKDIR /app

# Copiar archivos del proyecto
COPY . .

# Instalar dependencias y construir para producción
RUN bun install --frozen-lockfile
RUN bun run build


# === Etapa 2: Imagen final para producción ===
FROM oven/bun:1

WORKDIR /app

# Copiar solo lo necesario desde la etapa anterior
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/.nuxt ./.nuxt
COPY --from=builder /app/package.json ./package.json

# Exponer el puerto que usa Nuxt
EXPOSE 3000

# Comando para iniciar la app
CMD ["bun", "run", "start"]
