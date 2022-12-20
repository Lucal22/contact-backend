import { Body } from "../interface";
import { PrismaAccountsRepository} from '../repositories/prisma/prisma-accounts-repository';
import { SubmitAccountUseCase } from '../use-cases/submit-account-use-case';
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync();

const createAccounts = async (req: any, res: any) => {
    const { email, password }: Body = req.body
    
    if(email && password){
        
        const passwordHash = bcrypt.hashSync(password, salt)

        const prismaAccountsRepository = new PrismaAccountsRepository();

        const submitAccountUseCase = new SubmitAccountUseCase(
            prismaAccountsRepository
        )

        await submitAccountUseCase.execute({
            email,
            passwordHash
        })
        return res.status(201).send('Conta criada')
    }else{
        res.status(500).json('Email ou senha não informados')
    }
};

export default createAccounts;