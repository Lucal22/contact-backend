import { prisma } from '../prisma';

const getContacts = async (req: any, res: any) => {
    const {email} = req.body;
    const contacts = await prisma.contact.findMany({
        where:{
            accountEmail: email
        },
        orderBy: [
            {
                createdAt: 'desc'
            }
        ]
    })
    if(!contacts) {
        return res.status(500).json('Nenhuma conta encontrada')
    }
    res.status(200).send(contacts)
    return {...contacts}
};

export default getContacts;