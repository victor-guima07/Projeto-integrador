# Sistema de Automóveis - Projeto Integrador 3º Semestre

Projeto de integração entre as disciplinas de **Programação Web (Backend)** e **Front-end (React)**.

O **AutoVault** é um sistema simples para **cadastrar, visualizar e excluir automóveis**, permitindo que o usuário mantenha uma garagem com seus veículos.

---

## 📌 Como Rodar

### ⚙️ Backend

1. Entre na pasta do backend.
2. Abra o projeto na IDE.
3. Execute o projeto pelo botão **Play** da IDE.
4. O backend estará disponível em:

```text
http://localhost:8080/automoveis
```

O projeto utiliza um banco de dados **H2 em memória**, configurado no `application.properties`.

---

### 💻 Frontend

1. Entre na pasta do frontend.
2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto:

```bash
npm run dev
```

4. O frontend estará disponível em:

```text
http://localhost:5173
```

---

## ✅ Requisitos Atendidos

* Cadastro de automóveis com 5 campos
* Tela de cadastro de automóveis
* Tela de exibição dos automóveis
* Integração com API REST
* Requisições GET, POST e DELETE
* Componentização em React
* Utilização de `useState`
* Utilização de `useEffect`
* Utilização de JSX
* Utilização de `map()` para exibição dos veículos
* CSS Modules para estilização
* Axios para comunicação com a API
* Validação dos campos obrigatórios
* Validação do ano do automóvel
* Mensagem para garagem vazia
* Exclusão de automóveis

---

## 🛠️ Tecnologias Usadas

### Backend

* ☕ Java 21
* 🌱 Spring Boot
* 🗄️ H2 Database
* 🔌 JdbcTemplate
* 🌐 Spring Web

### Frontend

* ⚛️ React
* ⚡ Vite
* 📡 Axios
* 🎨 CSS Modules
* 🟨 JavaScript
* JSX

---

## 🚘 Funcionalidades

### Cadastro

Permite cadastrar um novo automóvel informando:

* **Ano**
* **Modelo**
* **Categoria**
* **Marca**
* **Cor**

### Garagem

Após o cadastro, os automóveis são exibidos na tela **Minha Garagem** através de cards.

Cada card apresenta as informações do veículo e possui a opção de **Excluir**.

### Exclusão

O usuário pode excluir um automóvel diretamente pelo seu card.

Após a exclusão, a garagem é atualizada automaticamente.

---

## 🔗 Endpoints da API

| Método   | Endpoint           | Descrição                   |
| -------- | ------------------ | --------------------------- |
| `GET`    | `/automoveis`      | Lista todos os automóveis   |
| `POST`   | `/automoveis`      | Cadastra um novo automóvel  |
| `DELETE` | `/automoveis/{id}` | Exclui um automóvel pelo ID |

---

## 📂 Estrutura do Frontend

```text
src/
├── assets/
├── componentes/
│   ├── CarCard/
│   │   ├── index.jsx
│   │   └── style.module.css
│   │
│   └── Formulario/
│       ├── index.jsx
│       └── style.module.css
│
├── pages/
│   ├── home/
│   │   ├── index.jsx
│   │   └── style.module.css
│   │
│   └── garagem/
│       ├── index.jsx
│       └── style.module.css
│
├── App.jsx
├── index.css
└── main.jsx
```

---

## 👨‍💻 Autor

**Victor Guimaraes Souza - 3ADSB**
