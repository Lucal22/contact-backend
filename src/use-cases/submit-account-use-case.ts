import { Account, AccountsRepository } from '../interface';

export class SubmitAccountUseCase {
    constructor(
      private  AccountsRepository: AccountsRepository, 
    ){}

    async execute(request : Account){
        const { email, passwordHash } = request;

        if(!email || !passwordHash ){
            throw new Error('All informations are required')
        }
        if(passwordHash.length>12 || passwordHash.length<6 ){
            throw new Error('Invalid password')
        }
        await this.AccountsRepository.create({
            email,
            passwordHash
        })
    }
}
