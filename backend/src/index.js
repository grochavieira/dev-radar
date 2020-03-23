const express = require("express"); // Importa o  módulo express
const mongoose = require("mongoose"); // Importa o módulo para usar o MongoDB
const cors = require("cors");
const http = require("http");
const routes = require("./routes");
const { setupWebSocket } = require("./websocket");

const app = express(); // Inicializa o servidor
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-kmqfw.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
); // Conecta a aplicação com o MongoDB

app.use(cors());
app.use(express.json()); // Algo que vai ser valido para todas as rotas para entender o json
app.use(routes);

// Métodos http:
// get -> Serve para buscar ou receber uma informação
// post -> Criar alguma informação, salvar ou criar produtos por exemplo
// put -> Editar um usuário, por exemplo
// delete -> Deletar um usuário, por exemplo

// Tipos de parâmetros:
// Query Params: request.query(Filtros, ordenação, paginação, ...)
// Route Params: request.params(Identificar um recurso na alteração ou remoção)
// Body: request.body(Criação ou alteração de um registro)

// MongoDB (é bom para situações não-relacional)

// app.get("/users", (request, response) => {
//   console.log(request.query);
//   //   return response.send("Hello World"); // Retorna uma resposta em texto
//   return response.json({ message: "Hello World" }); // Retorna uma resposta em json
// }); // Acessa o localhost:3333/

server.listen(3333); // Define uma porta para o servidor
