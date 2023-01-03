import { prisma } from '../prisma';

const getEmails = async (req: any, res: any) => {
    const checkEmail = await prisma.account.findMany({
        select: {
            email: true
        }
    })
    res.status(200).send(checkEmail)

    return checkEmail;
};

export default getEmails;