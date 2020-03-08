import { Request, Response } from 'express';
import { empleados }  from '../../fakedata/empleados.json'
export default (req: Request, res: Response) => {
    const id: string = req.params.id;
    const employe = empleados.find(e => e.id === id);

    if(!employe){
        return res.sendStatus(404);
    }

    res.status(200).json(employe);  
};