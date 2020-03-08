import { Request, Response } from 'express';
import { empleados }  from '../../fakedata/empleados.json'
import { Employe } from '../../models/employes';

export default (req: Request, res: Response) => {
    const employes: Employe = req.body;
    const index = empleados.findIndex(x => x.id === employes.id);

    if(index < 0){
        return res.sendStatus(404);
    }

    empleados.splice(index, 1, employes);
    res.status(200).json(employes)
};