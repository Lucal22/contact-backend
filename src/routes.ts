import express from 'express';
import createAccounts from './controllers/createAccounts';

const routes = express.Router();

routes.post('/register', createAccounts);

export default routes;

