import { Contact } from "../interface";

export interface ContactsRepository{
    create: (data: Contact) => Promise<void>
}

