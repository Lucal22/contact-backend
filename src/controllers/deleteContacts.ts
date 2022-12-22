import { Contact } from "../interface";
import { prisma } from '../prisma';

const deleteContacts = async (req: any, res: any) => {
    const { id }: Contact = req.body
    
    if(id){
        await prisma.contact.delete({
            where:{
                id: id
            }
        })
        return res.status(201).send('Contato apagado')
    }
    else{
        res.status(500).json('Falta dados')
    }
}

export default deleteContacts;