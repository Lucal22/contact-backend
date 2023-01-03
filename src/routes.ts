import express from 'express';
import createAccounts from './controllers/createAccounts';
import loginAccounts from './controllers/loginAccounts';
import newContacts from './controllers/newContacts';
import updateContacts from './controllers/updateContacts';
import deleteContacts from './controllers/deleteContacts';
import deleteAllContacts from './controllers/deleteAllContacts';
import getContacts from './controllers/getContacts';
import tokenValidate from './controllers/tokenValidate';
import getEmails from './controllers/getEmails';

const routes = express.Router();

routes.get('/getEmails', getEmails);
routes.post('/token', tokenValidate);
routes.post('/register', createAccounts);
routes.post('/login', loginAccounts);
routes.post('/login/contacts', getContacts);
routes.post('/login/contacts/create', newContacts);
routes.post('/login/contacts/update', updateContacts);
routes.post('/login/contacts/delete', deleteContacts);
routes.post('/login/contacts/deleteAll', deleteAllContacts);

export default routes;