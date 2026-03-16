# Etapa 1: build de la app Angular/Ionic
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Etapa 2: servidor web Nginx
FROM nginx:1.27-alpine

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/www /usr/share/nginx/html

EXPOSE 80

CMD sh -c 'echo "" && \
	echo "╔══════════════════════════════════════╗" && \
	echo "║   App Precio Luz disponible en:      ║" && \
	echo "║   http://localhost:8080              ║" && \
	echo "╚══════════════════════════════════════╝" && \
	echo "" && \
	nginx -g "daemon off;"'
