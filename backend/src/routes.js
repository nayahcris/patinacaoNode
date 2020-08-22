const express = require ('express');

const patinadorController = require('./controller/patinadorController');
const juradoController = require('./controller/juradoController');

const routes = express.Router();


routes.post('/patinadores', patinadorController.create);
routes.get('/patinadores', patinadorController.index);
routes.put('/patinadores/:id', patinadorController.update);
routes.delete('/patinadores/:id', patinadorController.delete);


routes.post('/jurados', juradoController.create);
routes.get('/jurados', juradoController.index);

module.exports  = routes;
