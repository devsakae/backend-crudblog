
# Sistema para blog (backend)

Um projeto criado por @devsakae e baseado em instruções e regras da @Trybe. O conteúdo deste repositório se refere apenas ao backend do CRUD do sistema de blog.


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](http://portfolio.sakae.social)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/rodrigosakae)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Sakae)


## Licença

[MIT](https://choosealicense.com/licenses/mit/)


## Stack utilizada

**Back-end:** Node, Express, Sequelize.

## Instruções de utilização

Recomendo utilizar o [Docker](https://www.docker.com/) para rodar o seu projeto, assim como o [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) para testar as rotas diretamente no [VSCode](http://vscode.dev).

### Clone o projeto

- Usando [Github-Cli](https://cli.github.com/):
```bash
  gh repo clone devsakae/backend-crudblog
```
- Usando SSH:
```bash
  git clone git@github.com:devsakae/backend-crudblog.git
```
Após isso, acesse a pasta do projeto:
```bash
  cd backend-crudblog
```

### Rodando com Docker

- Faça o docker-compose
```bash
  docker-compose up -d
```

- Acesse o terminal do container em modo iterativo

```bash
  docker exec -it crudblog bash
```

- Instale as dependências

```bash
  npm install
```

- Rode os scripts

```bash
  npm run prestart && npm run seed
```

- Inicie o sistema!
```bash
npm start
```

Verifique se o projeto está rodando acessando http://localhost:3000
## Documentação

Este sistema é apenas o backend de um sistema de blog. As rotas criadas são as relatadas abaixo.

🔑 - Quando este símbolo preceder as instruções, entenda que para acessar a rota, você precisará informar o token no campo "Authorization" do headers da requisição.

### - Rota /login
Faça login mediante envio de um objeto no body da requisição com email e password.

Ao logar com sucesso, você receberá um token de validação do usuário, caso tenha sido bem sucedido.

### - Rota /user
O método Post da rota /user cria um usuário mediante envio de um objeto no body da requisição:
```bash
{
    "displayName": (obrigatório; string >= 8 caracteres),
    "password": (obrigatório; string >= 6 caracteres)
    "email": (obrigatório; string),
    "image": (facultativo; string)
}
```

🔑 O método Get da rota /user busca todos os usuários.

🔑 O método Get da rota /user/1 busca o usuário com id 1.

🔑 O método Delete da rota /user/me apaga sua conta de usuário.

### - Rota /post
🔑 O método Get da rota /post busca todos os posts cadastrados.

🔑 O método Get da rota /post/1 busca o post cadastrado sob id 1.

🔑 O método Get da rota /post/search?q=steve busca posts com título ou content com a palavra "steve".

🔑 O método Post da rota /post recebe um objeto com "title" e "content" no body da requisição.

```bash
{
    "title": "Título do meu post",
    "content": "Texto do meu post"
}
```

🔑 O método Put da rota /post/1 recebe um objeto com "title" e/ou "content" para atualizar o post de id 1.

🔑 O método Delete da rota /post/1 deleta o post de id 1.

Nota: Você só conseguirá editar e deletar o post caso seja o autor (e esteja logado na conta).