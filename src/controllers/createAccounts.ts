import { Account } from "../interface";
import { PrismaAccountsRepository} from '../repositories/prisma/prisma-accounts-repository';
import { SubmitAccountUseCase } from '../use-cases/submit-account-use-case';

const createAccounts = async (req: any, res: any) => {
    const { email, password }: Account = req.body
    if(email && password){
        const prismaAccountsRepository = new PrismaAccountsRepository();

        const submitAccountUseCase = new SubmitAccountUseCase(
            prismaAccountsRepository
        )

        await submitAccountUseCase.execute({
            email, 
            password
        })
        return res.status(201).send(console.log(req.body))
    }else{
        res.status(500).json('Falta informações sobre o produto')
    }
};

export default createAccounts;