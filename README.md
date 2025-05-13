# Projeto Randomize - Docker

Este projeto é uma aplicação de treinamento onde o frontend foi desenvolvido com React e Vite, consumindo imagens e descrição de diferentes APIs.

## Configuração e Execução

### Criar o Dockerfile

O Dockerfile está configurado para:

- Utilizar a imagem base do Node.js (**node:18-slim**)
- Define o diretório de trabalho como **/app**
- Copia os arquivos necessários (**package.json**, **package-lock.json** e o código da aplicação)
- Instala as dependências com **npm install**
- Executa o comando de build com **npm run build**
- Expõe a porta **5173**
- Executa o servidor de desenvolvimento com **npm run dev**

### Automatizar a Criação do Contêiner

Para criar e executar o contêiner:

1- Criar a imagem Docker:

```bash
docker build -t randomize .
```

2- Executar o contêiner:

```bash
docker run -p 5173:5173 randomize
```

Após executar, você pode acessar a aplicação em:

```bash
http://localhost:5173/
```

### Observação .env

**Este reposítório comtém um .env, mesmo que não seja correto compartilhar chaves de acesso privada,
estou disponibilizando as chaves de 3 APIs para fins de teste**
