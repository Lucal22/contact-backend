import { Contact } from "../interface";
import { PrismaContactsUpdateRepository} from '../repositories/prisma/prisma-contacts-repository';
import { UpdateContactUseCase } from '../use-cases/contact-use-case';


const updateContacts = async (req: any, res: any) => {
    const { name, phone, id }: Contact = req.body
    
    if(id && name && phone){
    
        const prismaContactsUpdateRepository = new PrismaContactsUpdateRepository();

        const updateContactUseCase = new UpdateContactUseCase(
            prismaContactsUpdateRepository
        )

        await updateContactUseCase.execute({
            id,
            name,
            phone
        })
        return res.status(201).send('Contato atualizado')
    }else{
        res.status(500).json('Falta dados')
    }
}

export default updateContacts;