const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const clients = [
  { id: 3, nome: 'Angelo Luz', telefone: '53991203941' },
  { id: 1, nome: 'Matheus Kroning', telefone: '53990203941' },
  { id: 4, nome: 'Elda Knopp Kroning', telefone: '53991203940' },
  { id: 2, nome: 'Andreia Quintas', telefone: '53991203942' },
]

/**
 * Retorno de todos os clientes em uma linha só
 */
app.get('/clients', (request, response) => response.json(clients))

/**
 * Buscar um único recurso
 */
app.get('/clients/:id', (request, response) => {
  const client = clients.filter(value => value.id == request.params.id)
  response.json(client)
})
/**
 * Inserir dados no servidor - db
 */
app.post('/clients', (request, response) => {
  const client = request.body;
  clients.push(request.body);
  response.json(client);
})
/**
 * Atualizar registro
 */
app.put('/clients/:id', (request, response) =>{
  const id = request.params.id;
  const nome = request.body.nome;

  let client = clients.filter(value => value.id == id);
  client[0].nome = nome;

  response.json(clients[0]);
})

app.delete('/clients/:id', (request, response)=>{
  const id = request.params.id;
  clients = clients.filter(value => value.id != id);
  response.json(clients)
})

app.listen(3333);