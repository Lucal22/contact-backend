import { Body } from "../interface";
import { prisma } from '../prisma';
import webToken from "../utils/webToken";

const bcrypt = require('bcryptjs');

const loginAccounts = async (req: any, res: any) => {
    const { email, password }: Body = req.body
    
    if(email && password){
        const user = await prisma.account.findUnique({
            where:{
                email
            }
            // ,
            // include:{
            //     contacts: true
            // }
        })
        if(!user) {
            return;
        }
        const checkPassword = bcrypt.compareSync(password, user.password)

        if(!checkPassword){
            res.status(500).json('Email ou senha incorretos')
            return;
        }
        const {id}= user;

        const token = webToken(id, email)
        res.status(200).send({...user, token})
        return{...user, token}
    }else{
        res.status(500).json('Email ou senha não informados')
    }
};

export default loginAccounts;