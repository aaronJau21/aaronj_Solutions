# === Etapa 1: Construcción del proyecto ===
FROM oven/bun:1 AS builder

WORKDIR /app

# Copiar archivos de configuración primero (para aprovechar la caché de Docker)
COPY bun.lockb package.json ./

# Instalar dependencias (solo producción para evitar peso innecesario)
RUN bun install --frozen-lockfile

# Copiar el resto del proyecto
COPY . .

# Construir el proyecto para producción
RUN bun run build


# === Etapa 2: Imagen final de producción ===
FROM oven/bun:1 AS runner

WORKDIR /app

# Copiar solo lo necesario desde la etapa anterior
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./package.json

# (Opcional) Si usas variables de entorno
# COPY .env .env

# Exponer el puerto (por defecto en Nuxt es 3000)
EXPOSE 3000

# Comando de inicio (Nuxt 4 usa el output del build)
CMD ["bun", "run", ".output/server/index.mjs"]
