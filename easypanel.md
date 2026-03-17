---
description: Como preparar e hospedar um projeto React Vite no Easypanel (Hostinger VPS)
---
# Workflow: Deploy React Vite no Easypanel

Siga estes passos para configurar seu projeto React Vite para ser hospedado no Easypanel usando Docker + Nginx.

## 1. Estrutura do Projeto

Certifique-se de que seu projeto tem:

- `package.json` com script `"build": "vite build"`
- Pasta `dist/` será gerada após o build (configuração padrão do Vite)

## 2. Criação do Dockerfile

Crie um arquivo chamado `Dockerfile` na raiz do projeto:

```dockerfile
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Copiar arquivos de pacotes
COPY package.json pnpm-lock.yaml* yarn.lock* package-lock.json* ./

# Instalar dependências baseado no package manager
RUN \
  if [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  elif [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Copiar código fonte e fazer build
COPY . .
RUN \
  if [ -f pnpm-lock.yaml ]; then pnpm run build; \
  elif [ -f yarn.lock ]; then yarn build; \
  else npm run build; \
  fi

# Production stage - Nginx
FROM nginx:alpine AS runner
WORKDIR /usr/share/nginx/html

# Remover arquivos padrão do nginx
RUN rm -rf ./*

# Copiar build do Vite
COPY --from=builder /app/dist .

# Configuração customizada do Nginx para SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 3. Criação do nginx.conf

Crie um arquivo `nginx.conf` na raiz do projeto para suportar rotas do React Router:

```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## 4. Criação do .dockerignore

Crie um arquivo `.dockerignore` na raiz:

```text
node_modules
dist
.git
.env.local
.env
.windsurf
README.md
AGENTS.md
```

## 5. No Painel do Easypanel

1. **Crie um novo Projeto/App**.
2. **Conecte seu Repositório** (via GitHub App ou SSH).
3. **Selecione o Método de Build**: Escolha `dockerfile`.
4. **Variáveis de Ambiente**: Vá em "Env" e adicione variáveis que começam com `VITE_` (ex: `VITE_API_URL`).
5. **Porta**: O Nginx roda na porta `80` (padrão).
6. **Deploy**: Clique em Deploy.

## Observações Importantes

- **Variáveis de Ambiente**: No Vite, apenas variáveis que começam com `VITE_` são expostas no build.
- **Build Args**: Se precisar passar variáveis no momento do build, use `--build-arg` no Easypanel.
- **SPA Routing**: O `nginx.conf` garante que rotas do React Router funcionem corretamente.

