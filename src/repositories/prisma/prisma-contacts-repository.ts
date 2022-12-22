import { prisma } from '../../prisma';
import { Contact, ContactsRepository, ContactsUpdateRepository  } from '../../interface';

export class PrismaContactsRepository implements  ContactsRepository {
    async create({ name, phone, email }: Contact){

        const user = await prisma.contact.findMany({
            where:{
                OR:[
                    {
                        name: name
                    },
                    {
                        phone: phone
                    },
                ],
                AND:
                    {
                        accountEmail: email
                    },
                
            }
        })

        if(user.length>0){
            throw new Error('Nome ou phone já utilizados')
        }

        await prisma.contact.create({
            data: {
                Account: {
                    connect:{
                        email,
                    }
                },
                name,
                phone,
                
            }
        })
    };
}

export class PrismaContactsUpdateRepository implements ContactsUpdateRepository {
    async update({ name, phone, id }: Contact){

        await prisma.contact.update({
            where:{
                id: id
            },
            data:{
                name,
                phone
            }
        })
    }
};
