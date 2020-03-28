
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*app.ge't('/', (request, response) => {
    return response.send('Hello World');
});
*/

/*
Rota/Recurso

GET: Buscar uma informação no backend
POST: Criar umainformação no backend
PUT: Alterar uma informação 
DELETE: Deleta
*/
/*


Tipos de parametros 

*Query params: Parametros nomeados enviados na rota após o simbolo de ? (filtro , paginação)
*Route params: Parametros utilizados para identificar resursos
*Request Body: Corpo da requisiçãoutilizado para criar ou alterar recursos
*/

/**
 * 
 * Driver: SELECT * FROM users (abordagem SQL)
 * Query Builder: table('users').select(*).where() etc.. (abordagem em js)
 */




app.listen(3333);