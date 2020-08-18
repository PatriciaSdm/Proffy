import express from 'express';
import routes from './route';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//Params:
//Request Body (Corpo): Dados para criação ou atualização de um registro
//Route Params: Identificar qual recurso eu quero atualizar ou deletar (ex: users/1)
//Query Params: Paginação, filtros, ordenação (ex: /users?page=28,sort=name)

app.get('/', (request, response) => {
    return response.json({ message: 'Hello World!' });
});

app.listen(3333); //faz a aplicação ouvir requisições http



