import { Contact } from "../interface";
import { PrismaContactsRepository} from '../repositories/prisma/prisma-contacts-repository';
import { SubmitContactUseCase } from '../use-cases/submit-contact-use-case';


const newContacts = async (req: any, res: any) => {
    const { email, name, phone }: Contact = req.body
    
    if(email && name && phone){
    
        const prismaContactsRepository = new PrismaContactsRepository();

        const submitContactUseCase = new SubmitContactUseCase(
            prismaContactsRepository
        )

        await submitContactUseCase.execute({
            email,
            name,
            phone
        })
        return res.status(201).send('Contato adicionado')
    }else{
        res.status(500).json('Falta dados')
    }
}

export default newContacts;