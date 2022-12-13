import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

const getProducts = async (req: any, res: any) => {
    const products =  await prisma.product.findMany()
    res.status(200).json(products);
};

export default getProducts;