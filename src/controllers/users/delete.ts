import { Request, Response } from 'express';
import { usuarios }  from '../../fakedata/usuarios.json'

export default (req: Request, res: Response) => {
    const id: string = req.params.id;
    const index: number = usuarios.findIndex(u => u.id === id);

    if (index < 0){
        return res.sendStatus(404);
    }

    usuarios.splice(index, 1);
    res.sendStatus(200);
};