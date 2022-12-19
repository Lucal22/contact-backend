import { Account } from '../interface';
import { AccountsRepository } from '../repositories/accounts-repository';

export class SubmitAccountUseCase {
    constructor(
      private  AccountsRepository: AccountsRepository, 
    ){}

    async execute(request : Account){
        const { email, passwordHash } = request;

        if(!email || !passwordHash ){
            throw new Error('All informations are required')
        }
        await this.AccountsRepository.create({
            email,
            passwordHash
        })
    }
}
