# ETAPA 1: Construção (Build)
FROM node:20-alpine AS build

WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala as dependências do frontend
RUN npm install

# Copia o código fonte do frontend
COPY . .

# Gera a versão final e otimizada do seu site.
RUN npm run build 

# ETAPA 2: Servidor Web (Nginx)
FROM nginx:alpine

# Copia os arquivos gerados na ETAPA 1 para a pasta pública do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta 80 (padrão web do Nginx)
EXPOSE 80

# Inicia o Nginx e mantém rodando em segundo plano
CMD ["nginx", "-g", "daemon off;"]