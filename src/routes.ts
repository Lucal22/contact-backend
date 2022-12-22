import express from 'express';
import createAccounts from './controllers/createAccounts';
import loginAccounts from './controllers/loginAccounts';
import newContacts from './controllers/newContacts';
import updateContacts from './controllers/updateContacts';
import deleteContacts from './controllers/deleteContacts';
import deleteAllContacts from './controllers/deleteAllContacts';

const routes = express.Router();

routes.post('/register', createAccounts);
routes.get('/login', loginAccounts);
routes.post('/login/contacts', newContacts);
routes.post('/login/contacts/update', updateContacts);
routes.get('/login/contacts/delete', deleteContacts);
routes.get('/login/contacts/deleteAll', deleteAllContacts);

export default routes;

