export interface Body {
    email: string;
    password: string;
}

export interface Account {
    id?: string;
    email: string;
    passwordHash: string;
    contacts?: [
        id: string,
        name: string,
        phone: string,
    ]
}

export type Contact = {
    id?: string;
    email?: string;
    name: string;
    phone: string;
    
}

export interface AccountsRepository{
    create: (data: Account) => Promise<void>
}

export interface ContactsRepository{
    create: (data: Contact) => Promise<void>
}

export interface ContactsUpdateRepository{
    update: (data:Contact) => Promise<void>
}