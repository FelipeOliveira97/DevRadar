const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('Conexão MongoDB', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

app.use(cors())
app.use(express.json());
app.use(routes);
//Métodos HTTP : get, post, put, delete

// Tipos de parâmetros:
// Query Params:request.query(Filtros, ordenação, paginação, ....)
// Route Params: request.params(Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

//mongoDB (Não-Relacional)

app.listen(3333);
