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

### 🔹 Listagem de usuários (`GET /users`)

Retorna um array com todos os usuários disponíveis no arquivo `users.json`.

<p align="center">
  <img
    src="https://github.com/user-attachments/assets/0417c8bc-36e1-478f-99d0-0cd3c7d84e0f"
    alt="Resposta da rota GET /users mostrando a lista de usuários"
    width="520"
  />
</p>

---

### 🔹 Usuário específico por ID (`GET /users/:id`)

Retorna os dados de um usuário específico a partir do seu identificador único (`_id`).

<p align="center">
  <img
    src="https://github.com/user-attachments/assets/d77c73f2-f7c7-426c-84be-9466c1a0ece4"
    alt="Resposta da rota GET /users/:id com os dados de um usuário específico"
    width="520"
  />
</p>

---

### 🔹 Listagem de cartões (`GET /cards`)

Retorna um array contendo todos os cartões disponíveis no arquivo `cards.json`.

<p align="center">
  <img
    src="https://github.com/user-attachments/assets/cdc7b4f2-3329-454f-9f1e-3cf83ea7af58"
    alt="Resposta da rota GET /cards mostrando a lista de cartões"
    width="520"
  />
</p>

---

## 🎥 Demonstração em Vídeo

#### 🎬 [▶️ Assista ao vídeo](https://www.loom.com/share/4973ef99ad4b4253b7850b88ad53bb49)

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

📚 Observação Importante

Este projeto não utiliza banco de dados, pois faz parte de um sprint introdutório.
Nos próximos sprints, os dados serão migrados para uma base de dados real, substituindo os arquivos JSON.

---
