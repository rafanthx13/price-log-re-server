# Log Price App

API REST para o aplicativo (LogPriceApp)[https://price-log-app.herokuapp.com/login]

## Documentação

`/api-docs`

## Estrutura

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

config: arquivos de configuraçâo de autenticaçâo, swagger e middlewares do express

controler: recptores das requisiçôes HTTP. REsposável por retornar sucesos ou falaha da requisição

db: conexao com o banco de dados

env: acessar as variaveis de ambiente de "development" e "production"

erros: FUnçôes para detectar erro e messagens de erro

routes: listagem das rotas e de quais controller/middlewares utilizaçâo

service: serviços de acesso ao banco e demais operações intra API-REST. retorna para o seu respectivo controller os dados de sucesso ou de falaha


