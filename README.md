content = """# 🚀 Full-Stack Developer Portfolio

## 📖 Sobre o Projeto
Este repositório contém o código-fonte do meu portfólio profissional como desenvolvedor. Ele foi construído como uma aplicação Full-Stack moderna e escalável, projetada para demonstrar meus projetos, habilidades técnicas e experiência em arquitetura de software.

## 🏗️ Arquitetura e Estrutura (Monorepo)
O projeto segue o padrão **Monorepo**, mantendo o Front-end e o Back-end no mesmo repositório, porém com responsabilidades estritamente separadas. Todo o ecossistema é orquestrado via Docker.

### 💻 Front-end (`/client`)
- **Tecnologias:** React, Vite, TypeScript.
- **Arquitetura:** Feature-Sliced Design (FSD). O código está organizado de forma modular e altamente escalável:
  - `app/`: Configurações globais da aplicação e rotas.
  - `pages/`: Componentes de páginas completas (views).
  - `widgets/`: Blocos de interface independentes e complexos.
  - `features/`: Lógica de negócios e interações do usuário.
  - `shared/`: Componentes reutilizáveis, utilitários e UI kit.

### ⚙️ Back-end (`/server`)
- **Tecnologias:** NestJS, TypeScript, Prisma ORM.
- **Arquitetura:** Padrão modular do NestJS. O back-end é responsável por fornecer a API RESTful, gerenciar regras de negócios e conectar-se ao banco de dados com segurança.

### 🗄️ Banco de Dados e Infraestrutura
- **Banco de Dados:** PostgreSQL.
- **ORM:** Prisma (Modelagem de dados baseada no `schema.prisma`).
- **Containerização:** Docker e Docker Compose, garantindo que a interface, o servidor e o banco de dados rodem em uma rede isolada e padronizada em qualquer máquina.

## 🚀 Como Executar o Projeto

### Pré-requisitos
- [Docker](https://www.docker.com/) e Docker Compose instalados na máquina.

### Passos para rodar
1. Clone este repositório.
2. Certifique-se de que as portas necessárias (como `5173` para o Vite e `5432` para o Postgres) estão livres no seu sistema.
3. Na raiz do projeto, execute o comando para construir e subir os contêineres:
   ```bash
   docker compose up -d --build