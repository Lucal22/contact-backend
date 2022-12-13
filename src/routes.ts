import express from 'express';
import createAccounts from './controllers/createAccounts';
import getProducts from './controllers/getProducts';

const routes = express.Router();

routes.get('/login', getProducts);
routes.post('/register', createAccounts);

export default routes;

