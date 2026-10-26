# ---- Build stage: type-check + Vite production build ----
FROM node:20-bookworm-slim AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
# Baked into the bundle at build time; the browser calls the backend directly.
ARG VITE_API_URL=https://localhost:3000
ENV VITE_API_URL=$VITE_API_URL
RUN npm run build
RUN npm install -g serve

EXPOSE 4173

# O CMD é obrigatório para manter o container rodando em tempo de execução
CMD ["serve", "-s", "dist", "-l", "5173"]