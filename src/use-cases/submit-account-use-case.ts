import { Account } from '../interface';
import { AccountsRepository } from '../repositories/accounts-repository';

export class SubmitAccountUseCase {
    constructor(
      private  AccountsRepository: AccountsRepository, 
    ){}

    async execute(request : Account){
        const { email, password } = request;

        if(!email || !password ){
            throw new Error('All informations are required')
        }
        await this.AccountsRepository.create({
            email,
            password
        })
    }
}
