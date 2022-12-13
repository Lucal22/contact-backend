import { Account } from "../interface";

export interface AccountsRepository{
    create: (data: Account) => Promise<void>
}

