import { AccountsRepository } from '../accounts-repository'
import { prisma } from '../../prisma';
import { Account } from '../../interface';

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