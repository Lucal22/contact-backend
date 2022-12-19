import express from 'express';
import createAccounts from './controllers/createAccounts';
import loginAccounts from './controllers/loginAccounts';

const routes = express.Router();

routes.post('/register', createAccounts);
routes.post('/login', loginAccounts);

export default routes;

