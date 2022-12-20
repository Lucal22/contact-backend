import express from 'express';
import createAccounts from './controllers/createAccounts';
import loginAccounts from './controllers/loginAccounts';
import newContacts from './controllers/newContacts';

const routes = express.Router();

routes.post('/register', createAccounts);
routes.get('/login', loginAccounts);
routes.post('/login/contacts', newContacts);

export default routes;

