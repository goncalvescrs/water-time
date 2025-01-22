# Projeto WaterTime

Um Timer Online de Hidratação para Melhorar Seu Bem-Estar

## 🛠️ Tecnologias e Ferramentas

<div style="display: flex; justify-content: space-between; width: 50%;" >
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript" style="margin-right: 10px;"/>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" style="margin-right: 10px;"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" style="margin-right: 10px;"/>
  <img src="https://img.shields.io/badge/Bootstrap-316192?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" style="margin-right: 10px;"/>  
</div>

## Funcionalidades Principais

- Calculo considerando tempo de sono, peso e idade.
- O monitoramento inicia a partir do momento em que o WaterTime é aberto pela primeira vez no dia. 
- Lembrete sobre a necessidade de encher sua garrafinha sempre que esta estiver no final. 
- registro tanto das vezes em que fez a pausa para beber água, quanto as vezes em que não fez.
- Cadastro de novos usuários no sistema.
- autenticação de usuários a fim de que cada um só veja seu próprio perfil.

## Tecnologias Utilizadas

### Backend

#### MockAPI
- **json-server**

    ```json
    {
    "users": [
        {
        "id": "0506",
        "name": "Enivel",
        "email": "e@gmail.com",
        "password": "1234",
        "weight": "75",
        "age": "22",
        "sleepHours": "4",
        "bottle": "600"
        }
    ]
    }

### Frontend

- **JavaScript (ES6+ e JSX)**
- **React**:
  - react
  - react-dom
  - @types/react
  - @types/react-dom
  - react-router-dom
  - react-bootstrap
  - react-icons
  - react-toastify
- **Vite**:
  - vite
  - @vitejs/plugin-react
- **Axios** - Requisições HTTP
- **ESLint** - Linting de código JavaScript
  - eslint
  - eslint-plugin-react
  - eslint-plugin-react-hooks
  - eslint-plugin-react-refresh
