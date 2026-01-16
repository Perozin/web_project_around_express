# 🌍 Tripleten web_project_around_express

---

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-Framework-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/Nodemon-Dev_Tool-76D04B?style=for-the-badge&logo=nodemon&logoColor=white" />
  <img src="https://img.shields.io/badge/ESLint-Airbnb-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" />
</p>

---

📘 Projeto: API Simples com Node.js e Express

---

## 📌 Descrição do Projeto

Este projeto consiste em uma API REST simples, desenvolvida como solução temporária para fornecer dados de usuários e cartões sem o uso de banco de dados.

Os dados são armazenados em arquivos JSON e lidos diretamente do sistema de arquivos.
O objetivo principal é simular o comportamento de uma API real, preparando o terreno para a integração com bases de dados nos próximos sprints.

---

### Funcionalidades principais

```
- Retornar a lista completa de usuários

- Retornar um usuário específico pelo seu identificador (_id)

- Retornar a lista completa de cartões

- Tratar corretamente rotas inexistentes e erros do servidor
```

---

## 🛠️ Tecnologias e Técnicas Utilizadas

* Node.js — ambiente de execução JavaScript no servidor

* Express.js — framework para criação de APIs REST

* JavaScript (ES6) — linguagem principal do projeto

* fs (File System) — leitura de arquivos JSON

* path — manipulação segura de caminhos de arquivos

* JSON — armazenamento temporário de dados

* ESLint — padronização e qualidade de código

---

### Técnicas aplicadas

```
- Estruturação modular de rotas

- Uso de middlewares do Express

- Tratamento de erros HTTP (404 e 500)

- Separação de responsabilidades (app / rotas / dados)
```

---

## 🔗 Endpoints Disponíveis

```
📍 Usuários

* GET /users — retorna todos os usuários

* GET /users/:id — retorna um usuário específico pelo _id
```

```
📍 Cartões

* GET /cards — retorna todos os cartões
```

```
📍 Erros

* Qualquer rota inexistente retorna:

{
  "message": "Recurso requisitado não encontrado"
}
```

---

## 🖼️ Capturas de Tela / Exemplos de Uso

Abaixo estão exemplos de requisições realizadas à API utilizando o navegador/Postman, demonstrando o funcionamento correto das rotas implementadas.

---

### 🔹 Cria usuário (`POST /users`)

Cria um usuário específico com identificador único (`_id`).

<p align="center">
  <img
   src="https://github.com/user-attachments/assets/cb9a2d89-b6a4-4b89-96a6-fe259bd8fbdb"
    alt="Resposta da rota GET /users/:id com os dados de um usuário específico"
    width="520"
  />
</p>

---

### 🔹 Listagem de usuários (`GET /users`)

Retorna um array com todos os usuários disponíveis no arquivo `users.json`.

<p align="center">
  <img
   src="https://github.com/user-attachments/assets/7963bc26-ca8b-4d4c-84e0-a9085e3c77a9"
    alt="Resposta da rota GET /users mostrando a lista de usuários"
    width="520"
  />
</p>

---

### 🔹 Usuário específico por ID (`GET /users/:id`)

Retorna os dados de um usuário específico a partir do seu identificador único (`_id`).

<p align="center">
  <img
   src="https://github.com/user-attachments/assets/30c02813-23c5-4cc7-8b0e-61f112823059"
    alt="Resposta da rota GET /users/:id com os dados de um usuário específico"
    width="520"
  />
</p>

---

### 🔹 Listagem de cartões (`GET /cards`)

Retorna um array contendo todos os cartões disponíveis no arquivo `cards.json`.

<p align="center">
  <img
    src="https://github.com/user-attachments/assets/4a51e579-9334-4cff-88b9-efd0cd154bbb"
    alt="Resposta da rota GET /cards mostrando a lista de cartões"
    width="520"
  />
</p>

---

## 🎥 Demonstração em Vídeo

#### 🎬 [▶️ Assista ao vídeo](https://www.loom.com/share/de408fc528ab4f2eaf782512ef5b866a)

---

## 🚀 Como Executar o Projeto Localmente

### Clone o repositório

```
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### Instale as dependências

```
npm install
```

### Inicie o servidor

```
npm run start
```

### Acesse

```
http://localhost:3000
```

---

## 🔄 Atualização do Projeto — Sprint 16 (Persistência com MongoDB)

A partir desta etapa, o projeto deixou de utilizar arquivos JSON como armazenamento temporário e passou a operar com **persistência real de dados**, utilizando **MongoDB** como banco de dados e **Mongoose** como ODM.

Essa evolução transforma a aplicação em uma **API REST completa**, mais próxima de um cenário real de produção.

---

## 🗄️ Persistência de Dados com MongoDB

- Integração com banco de dados **MongoDB**
- Conexão realizada via **Mongoose**
- Banco utilizado: `aroundb`
- Models definidos com **schemas e validações**

### Models implementados

#### 👤 User
- `name` — string (2–30 caracteres, obrigatório)
- `about` — string (2–30 caracteres, obrigatório)
- `avatar` — URL válida (obrigatório)

#### 🖼️ Card
- `name` — string (2–30 caracteres, obrigatório)
- `link` — URL válida (obrigatório)
- `owner` — referência ao usuário (`ObjectId`)
- `likes` — array de usuários (`ObjectId`)
- `createdAt` — data de criação automática

---

## 🔐 Middleware de Autorização (temporário)

Foi implementado um middleware temporário que injeta um usuário fixo no objeto `req.user`, permitindo testar corretamente rotas protegidas sem autenticação real.

> ⚠️ Este middleware será substituído por autenticação completa (JWT) em sprints futuros.

---

## 🔗 Novos Endpoints Implementados

### 📍 Usuários

```
POST /users — cria um novo usuário
PATCH /users/me — atualiza nome e descrição do usuário logado
PATCH /users/me/avatar — atualiza o avatar do usuário logado
```

---

### 📍 Cartões

```
POST /cards — cria um novo cartão
DELETE /cards/:cardId — remove um cartão
PUT /cards/:cardId/likes — adiciona um like ao cartão
DELETE /cards/:cardId/likes — remove um like do cartão
```

---

## ⚠️ Tratamento de Erros

A aplicação passou a contar com tratamento centralizado de erros HTTP:

- **400** — Dados inválidos (validação do Mongoose)
- **404** — Recurso não encontrado
- **500** — Erro interno do servidor

Os erros são tratados por um middleware global, garantindo respostas padronizadas e consistentes.

---

## 🛠️ Tecnologias Adicionais Utilizadas

- **MongoDB** — banco de dados NoSQL
- **Mongoose** — modelagem e validação de dados
- **ObjectId** — relacionamento entre coleções
- **Validações customizadas** com regex

---

📌 Observação

Esta versão do projeto já opera com **persistência real**, porém ainda não possui autenticação por login e senha.
A implementação de autenticação e autorização completas será realizada nos próximos sprints.

---
