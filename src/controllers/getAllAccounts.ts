import { prisma } from '../prisma';

const getAllAccounts = async (req: any, res: any) => {
    const user = await prisma.account.findMany()
    if(!user) {
        return res.status(500).json('Nenhuma conta encontrada')
    }
    res.status(200).send()
    return {...user}
};

export default getAllAccounts;