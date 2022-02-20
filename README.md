## Descrição

RESTFul API utilizando Express e TypeORM (MySQL).
Também possui uma versão utilizando NestJS: https://github.com/glinharesb/api-restful/tree/nest

## Rotas

Clientes:

| MÉTODO | ENDPOINT| DESCRIÇÃO|
|-|-|-|
| GET| /clientes| Retorna todos os clientes|
| GET| /clientes/:id| Retorna um cliente específico|
|POST|/clientes|Insere um novo cliente|
|PUT|/clientes/:id|Atualiza um cliente específico|
|DELETE|/clientes/:id|Exclui um cliente específico

Produtos:

| MÉTODO | ENDPOINT| DESCRIÇÃO|
|-|-|-|
| GET| /produtos| Retorna todos os produtos|
| GET| /produtos/:id| Retorna um produto específico|
|POST|/produtos|Insere um novo produto|
|PUT|/produtos/:id|Atualiza um produto específico|
|DELETE|/produtos/:id|Exclui um produto específico

## Instalação

Requisitos:
- Node.js 16 (foi utilizado a versão 16.13.1 durante os testes)
- MySQL/MariaDB (foi utilizando o MySQL 8.0.28 e MariaDB 10.4.21 durante os testes)

Caso queira rodar o banco de dados localmente, renomeie o arquivo .env.dist para .env

Exemplo de configuração:

```
TYPEORM_CONNECTION = mysql
TYPEORM_HOST = localhost
TYPEORM_USERNAME = root
TYPEORM_DATABASE = apirestful
TYPEORM_PORT = 3306
TYPEORM_MIGRATIONS = src/database/migrations/*.ts
TYPEORM_MIGRATIONS_DIR = src/database/migrations
TYPEORM_ENTITIES = src/entities/*.ts
TYPEORM_ENTITIES_DIR = src/entities
```

Após o banco de dados ser configurado corretamente, execute os seguintes comandos:

```bash
# instalar as dependências
npm install

# criar as tabelas no banco de dados
npm run typeorm migration:run

# iniciar a aplicação
npm run dev
```

## Docker

Requisito:
- Docker (foi utilizado a versão 20.10.12 durante os testes)

Se preferir utilizar o Docker, execute o seguinte comando:

```bash
docker compose up --build
```

Ou utilizando o modo detach (liberar o terminal para outros usos):


```bash
docker compose up --build -d
```

Após gerado a build e iniciado os containers, a API estará disponível no seguinte endereço: http://localhost:3333
