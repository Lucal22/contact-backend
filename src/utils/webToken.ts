import jwt from 'jsonwebtoken';

export default function webToken(id:string, email: string){
    const token = jwt.sign({id, email }, process.env.TOKEN_SECRET as string, {
        expiresIn: process.env.TOKEN_EXPIRATION
    })
    return token;
}