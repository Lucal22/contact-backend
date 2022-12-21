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
    id?: number;
    email: string;
    name: string;
    phone: string;
    
}