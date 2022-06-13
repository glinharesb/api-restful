# api-restful

RESTful API using Express and TypeORM (MySQL).

It also has a version using NestJS: https://github.com/glinharesb/api-restful/tree/nest

## Routes

- Clientes:

| METHOD | ENDPOINT| DESCRIPTION|
|-|-|-|
| GET| /clientes| Retorna todos os clientes|
| GET| /clientes/:id| Retorna um cliente específico|
|POST|/clientes|Insere um novo cliente|
|PUT|/clientes/:id|Atualiza um cliente específico|
|DELETE|/clientes/:id|Exclui um cliente específico

JSON example:
```json
{
  "nome": "Gabriel Linhares",
  "cpf": "12345678901",
  "sexo": "Masculino",
  "email": "glinharesb@gmail.com"
}
```

- Produtos:

| METHOD | ENDPOINT| DESCRIPTION|
|-|-|-|
| GET| /produtos| Retorna todos os produtos|
| GET| /produtos/:id| Retorna um produto específico|
|POST|/produtos|Insere um novo produto|
|PUT|/produtos/:id|Atualiza um produto específico|
|DELETE|/produtos/:id|Exclui um produto específico

JSON example:
```json
{
  "nome": "Camiseta",
  "fabricacao": "Nacional",
  "tamanho": "M",
  "valor": 50.10
}
```

## Installation 

Requirements:
- Node.js 16 (version 16.13.1 was used during testing)
- MySQL/MariaDB (MySQL 8.0.28 and MariaDB 10.4.21 were used during testing)

1. Rename the .env.dist file to .env
- Note: if you want to use Docker, just rename the file and skip this step.
- Configuration example using SQLite:

```
# app config
APP_PORT=3000

# typeorm config for sqlite
TYPEORM_CONNECTION=sqlite
TYPEORM_DATABASE=src/database/db.sqlite3

# typeorm migrations and entites config
TYPEORM_MIGRATIONS=src/database/migrations/*.ts
TYPEORM_MIGRATIONS_DIR=src/database/migrations
TYPEORM_ENTITIES=src/entities/*.ts
TYPEORM_ENTITIES_DIR=src/entities
```

- Using MySQL:
```
# app config
APP_PORT=3000

# typeorm config for mysql
TYPEORM_CONNECTION=mysql
TYPEORM_HOST=localhost
TYPEORM_USERNAME=root
TYPEORM_PASSWORD=apirestful
TYPEORM_DATABASE=apirestful
TYPEORM_PORT=3306

# typeorm migrations and entites config
TYPEORM_MIGRATIONS=src/database/migrations/*.ts
TYPEORM_MIGRATIONS_DIR=src/database/migrations
TYPEORM_ENTITIES=src/entities/*.ts
TYPEORM_ENTITIES_DIR=src/entities
```

2. After the database is properly configured, run the following commands:

```bash
# install dependencies
npm install

# create tables in database
npm run typeorm migration:run

# start application
npm run dev
```

## Docker

Requirement:
- Docker (version 20.10.12 was used during testing)

After renaming the .env.dist file to .env, run the following command

```bash
docker compose up --build
```

Or using detach mode (freeing up terminal for other uses):


```bash
docker compose up --build -d
```

After generating the build and starting containers, the API will be available at the following address: http://localhost:3000
