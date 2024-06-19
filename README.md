Instruções
Após clonar o projeto, execute npm install para instalar as dependências
Execute npm run prisma para gerar o banco de dados
Execute npm run build para executar a aplicação
Agora é só utilizar a API
Exemplos
Criar usuário
Requisição (POST):

http://localhost:3000/api/user
Body:

{
        "name": "nomeDeUsuario",
        "email": "seuemail@gmail.com",
        "password": "suasenha123"
}
Listar usuários
Requisição (GET):

http://localhost:3000/api/users
Criar post
Requisição (POST):

http://localhost:3000/api/post
Body:

{
        "title": "Título do post",
        "content": "Esse aqui é o conteúdo do post",
        "authorId": 1,
        "published": true
}
Onde authorId é o ID do usuário criador do post

Listar posts
Requisição (GET):

http://localhost:3000/api/posts
Criar comentário
Requisição (POST):

http://localhost:3000/api/comment
Body:

{
        "content": "Este é o conteúdo do comentario do post",
        "postId": 3
}
Onde postId é o ID do post em que o comentário será adicionado

Listar comentários por post
Requisição (GET):

http://localhost:3000/api/posts/3/comments
Onde '3' é o ID do post do qual serão obtidos os comentários.