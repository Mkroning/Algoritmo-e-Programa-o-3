/**
 * ROTA / Recurso
 */
/**
 * métodos http:
 * 
 * get: Buscar/listar uma informação do back-end
 * post: criar uma informação no back-end
 * pust: alterar uma informação no back-end
 * delete: deletar uma informação no back-end
 */
/**
 * tipos de parâmetros:
 * 
 * query params: Parâmetros nomeados enviados na rota após "?"(filtros, paginação)
 * Route params: parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizada para criar ou alterar recursos
 */

/**
 * Estruturas de banco de dados
 * 
 * SQL : MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * 
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM  users
 * 
 * Query Builder: table('users').select('*').where()
 */

const express = require('express')
const app = express();

app.get('/', (request, response) => {
  response.json({ mensage: 'Hello world' });
})


app.listen(3000);