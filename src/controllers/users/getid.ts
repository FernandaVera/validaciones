import { Request, Response } from 'express';
import { usuarios }  from '../../fakedata/usuarios.json'
export default (req: Request, res: Response) => {
    const id: string = req.params.id;
    const user = usuarios.find(e => e.id === id);

    if(!user){
        return res.sendStatus(404);
    }

    res.status(200).json(user);  
};