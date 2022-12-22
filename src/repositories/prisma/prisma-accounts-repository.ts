import { prisma } from '../../prisma';
import { Account, AccountsRepository } from '../../interface';

export class PrismaAccountsRepository implements  AccountsRepository {
    async create({ email, passwordHash }: Account){

        await prisma.account.create({
            data: {
                email,
                password: passwordHash,
            }
        })
    };
}