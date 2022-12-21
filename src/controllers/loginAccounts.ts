import { Body } from "../interface";
import { prisma } from '../prisma';

const bcrypt = require('bcryptjs');

const loginAccounts = async (req: any, res: any) => {
    const { email, password }: Body = req.body
    
    if(email && password){
        const user = await prisma.account.findUnique({
            where:{
                email
            },
            include:{
                contacts: true
            }
        })
        if(!user) {
            return;
        }
        const checkPassword = bcrypt.compareSync(password, user.password)

        if(!checkPassword){
            res.status(500).json('Email ou senha incorretos')
            return;
        }
        res.status(200).send(user)
        return{...user}
    }else{
        res.status(500).json('Email ou senha não informados')
    }
};

export default loginAccounts;