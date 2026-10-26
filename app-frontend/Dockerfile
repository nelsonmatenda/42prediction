# ---- Build stage: type-check + Vite production build ----
FROM node:20-bookworm-slim AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
# Baked into the bundle at build time; the browser calls the backend directly.
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL
RUN npm run build

FROM nginx:alpine AS runner

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html/42prediction

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]