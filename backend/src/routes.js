const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();
//Chamada de criação de ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//Chamada Lista Casos de uma Ong especifica
routes.get('/profile', ProfileController.index);

//Chamada Login 
routes.post('/sessions', SessionController.create)

//Chamadas de criação de casos
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);

// Chamada Delete
routes.delete('/incidents/:id', IncidentController.delete);



module.exports = routes;