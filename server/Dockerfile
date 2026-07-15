# ETAPA 1: Construção (Build) do NestJS
FROM node:20-alpine AS build

WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala todas as dependências (incluindo as de desenvolvimento)
RUN npm install

# Copia o código fonte
COPY . .

# Compila o TypeScript para JavaScript (gera a pasta /app/dist)
RUN npm run build 

# ETAPA 2: Produção (Apenas o que importa)
FROM node:20-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY package*.json ./

# Expõe a porta que o NestJS usa por padrão
EXPOSE 3000

# Comando para iniciar o servidor em modo de produção
CMD ["npm", "run", "start:prod"]