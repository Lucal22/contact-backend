import express from 'express';
import createAccounts from './controllers/createAccounts';
import loginAccounts from './controllers/loginAccounts';
import newContacts from './controllers/newContacts';
import updateContacts from './controllers/updateContacts';
import deleteContacts from './controllers/deleteContacts';
import deleteAllContacts from './controllers/deleteAllContacts';
import getAllAccounts from './controllers/getAllAccounts';
import tokenValidate from './controllers/token';

const routes = express.Router();

routes.post('/token', tokenValidate);
routes.post('/register', createAccounts);
routes.post('/login', loginAccounts);
routes.post('/login/contacts', newContacts);
routes.post('/login/contacts/update', updateContacts);
routes.get('/login/contacts/delete', deleteContacts);
routes.get('/login/contacts/deleteAll', deleteAllContacts);
routes.get('/accounts', getAllAccounts);

export default routes;