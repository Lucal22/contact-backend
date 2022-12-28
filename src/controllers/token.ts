import  jwt  from 'jsonwebtoken';


export default function tokenValidate(req:any, res:any){
    const { token } = req.body;
    const data = jwt.verify(token, process.env.TOKEN_SECRET as string, function(err: any, decoded: any){
        if(err){
            return false;
        }
        res.status(200).json('Token válido');
        return true;
    });
    return data;
}