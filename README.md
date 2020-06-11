# Log Price Server

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-brightgreen" alt="License MIT">
  <img src="https://img.shields.io/badge/app-api--rest-blue" alt="app api-rest">
  <img src="https://img.shields.io/badge/server-node--express-orange" alt="server node-express"> 
</p>

##   🞋 Objetivo

API REST para o aplicativo (LogPriceApp)[https://price-log-app.herokuapp.com/login]

## 🛠 Instalação

**Instalar dependências**

```sh
$ npm i
```

**Executar**

```sh
$ npm start
```

## :computer: Tecnologias

### API REST ([Node](https://nodejs.org/en/docs/) + [Express](https://expressjs.com/))

**Algumas dependências**

+ **[knex](http://knexjs.org/)**: a "batteries included" SQL query builder for **Postgres**, **MSSQL**, **MySQL**, **MariaDB**, **SQLite3**, **Oracle**, and **Amazon Redshift** designed to be flexible, portable, and fun to use.
+ **[consign](https://www.npmjs.com/package/consign)**: auto-load scripts in express applications
+ **[swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)** : This module allows you to serve auto-generated [swagger-ui](https://swagger.io/tools/swagger-ui/) generated API docs from express, based on a `swagger.json` file. 

O restante pode ser encontrado em `package.json`

 🞋

##  :book: Documentação

Após executar

`localhost:3000/swagger`

## Estrutura do projeto

````
├── app.js
├── config
│   ├── middlewares.js
│   ├── passport.js
│   ├── swagger.js
│   └── swagger.yaml
├── controller
│   ├── city.js
│   ├── log.js
│   ├── product.js
│   ├── shop.js
│   └── user.js
├── db
│   ├── connection.js
│   └── knexfile.js
├── env
│   ├── env.config.js
│   └── env_file
├── errors
│   ├── functions.js
│   └── messages.js
├── routes
│   ├── routes_errors.js
│   └── routes.js
└── services
    ├── auth.js
    ├── city.js
    ├── log.js
    ├── product.js
    ├── shop.js
    └── user.js
````

`config`: arquivos de configuração de autenticação, swagger e middlewares do express

`controler`: receptores das requisições HTTP. Responsável por retornar sucesso ou falha da requisição

`db`: conexão com o banco de dados

`env`: acessar as variáveis de ambiente de "`development`" e "`production`"

`errors`: Funções para detectar erro e mensagens de erro

`routes`: listagem das rotas e de quais controller/middlewares utilização

`service`: serviços de acesso ao banco e demais operações intra API-REST. retorna para o seu respectivo controller os dados de sucesso ou de falha



<h2 align="center"> Feito por <a href="https://rafanthx13.github.io/">Rafael Morais de Assis</a></h2>