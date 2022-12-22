import { prisma } from '../prisma';


const deleteAllContacts = async (req:any, res:any) => {
    const { email } = req.body
    try{
        await prisma.contact.deleteMany({
            where:{
                accountEmail: email
            }
        })
        return res.status(201).send('Todos os contatos foram apagados')

    }catch(e){
        return res.status(500).send('Não foi possível deletar os usuários')

    }
    }

export default deleteAllContacts;