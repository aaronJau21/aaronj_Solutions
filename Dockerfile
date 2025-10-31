# === Etapa 1: Construcción del proyecto ===
FROM node:22-alpine AS builder

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./


# Instalar dependencias
RUN npm install --frozen-lockfile --production=false

# Copiar el resto del proyecto
COPY . .

# Construir la aplicación
RUN npm run build


# === Etapa 2: Imagen final de producción ===
FROM node:22-alpine AS runner

WORKDIR /app

# Copiar el build y package.json
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./package.json

# Variables de entorno
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000

# Ejecutar la aplicación
CMD ["node", ".output/server/index.mjs"]
