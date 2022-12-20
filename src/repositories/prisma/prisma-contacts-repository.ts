import { ContactsRepository } from '../contacts-repository'
import { prisma } from '../../prisma';
import { Contact } from '../../interface';

export class PrismaContactsRepository implements  ContactsRepository {
    async create({ name, phone, email }: Contact){

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