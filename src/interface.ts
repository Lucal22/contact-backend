export interface Body {
    email: string;
    password: string;
}

export interface Account {
    email: string;
    passwordHash: string;
}