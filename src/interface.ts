export interface Body {
    email: string;
    password: string;
}

export interface Account {
    id?: string;
    email: string;
    passwordHash: string;
}

export type Contact = Account & {
    id?: number;
    name: string;
    phone: string;
    
}