# 🚀 Guía de Despliegue en Dokploy

Esta guía te ayudará a desplegar **AaronJ Solutions** en Dokploy de forma rápida y sencilla.

## 📋 Requisitos Previos

- Tener una cuenta en Dokploy
- Acceso a tu repositorio de GitHub/GitLab
- API Key de Google Gemini (para el chatbot)

## 🔧 Configuración en Dokploy

### 1. Crear Nueva Aplicación

1. Accede a tu dashboard de Dokploy
2. Haz clic en **"New Application"** o **"Nueva Aplicación"**
3. Selecciona **"From Git Repository"** o **"Desde Repositorio Git"**

### 2. Conectar Repositorio

1. Conecta tu cuenta de GitHub/GitLab
2. Selecciona el repositorio `aaronj_Solutions`
3. Elige la rama `main` (o la que uses)

### 3. Configurar Variables de Entorno

En la sección de **Environment Variables**, agrega las siguientes variables:

```
API_KEY_GEMINI=tu_api_key_de_gemini
URL_API=https://tu-dominio.com/api (opcional)
NODE_ENV=production
HOST=0.0.0.0
PORT=3000
```

**Importante:** Reemplaza `tu_api_key_de_gemini` con tu API Key real de Google Gemini.

### 4. Configuración de Build

Dokploy detectará automáticamente el `Dockerfile` en la raíz del proyecto. Si necesitas configurar manualmente:

- **Build Method:** Dockerfile
- **Dockerfile Path:** `./Dockerfile`
- **Context Path:** `.`
- **Port:** `3000`

### 5. Configurar Dominio (Opcional)

1. Ve a la sección **"Domains"** o **"Dominios"**
2. Agrega tu dominio personalizado
3. Dokploy configurará automáticamente SSL con Let's Encrypt

### 6. Desplegar

1. Haz clic en **"Deploy"** o **"Desplegar"**
2. Espera a que el build termine (puede tomar unos minutos)
3. Tu aplicación estará disponible en la URL proporcionada por Dokploy

## 🐳 Dockerfile

El proyecto incluye un `Dockerfile` optimizado con:
- **Multi-stage build** para reducir el tamaño de la imagen
- **Node.js 20 Alpine** (imagen ligera)
- **Build optimizado** de Nuxt
- **Variables de entorno** configuradas

## 📦 Archivos Importantes

- `Dockerfile` - Configuración de Docker
- `.dockerignore` - Archivos excluidos del build
- `dokploy.json` - Configuración de Dokploy
- `nuxt.config.ts` - Configuración de Nuxt

## 🔄 Actualizaciones Automáticas

Dokploy puede configurarse para redesplegar automáticamente cuando:
- Haces push a la rama principal
- Creas un nuevo tag
- Manualmente desde el dashboard

## 🛠️ Comandos Útiles en Local

Para probar el build de Docker localmente:

```bash
# Construir la imagen
docker build -t aaronj-solutions .

# Ejecutar el contenedor
docker run -p 3000:3000 \
  -e API_KEY_GEMINI=tu_api_key \
  aaronj-solutions
```

## 📊 Monitoreo

Dokploy proporciona:
- Logs en tiempo real
- Métricas de uso de CPU/RAM
- Health checks automáticos
- Rollback fácil a versiones anteriores

## 🆘 Solución de Problemas

### El build falla
- Verifica que todas las variables de entorno estén configuradas
- Revisa los logs de build en Dokploy
- Asegúrate de que `package.json` tenga el script `build`

### La aplicación no inicia
- Verifica que el puerto 3000 esté correctamente expuesto
- Revisa los logs de la aplicación en Dokploy
- Confirma que las variables de entorno sean correctas

### Error 502 Bad Gateway
- Espera unos segundos, la aplicación puede estar iniciando
- Verifica que el health check esté configurado correctamente
- Revisa los logs para errores de inicio

## 📞 Soporte

Si tienes problemas con el despliegue:
1. Revisa los logs en Dokploy
2. Verifica la documentación oficial de Dokploy
3. Contacta al equipo de AaronJ Solutions

---

¡Tu aplicación está lista para desplegarse! 🎉
