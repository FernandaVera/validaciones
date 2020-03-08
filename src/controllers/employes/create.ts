import { Request, Response } from 'express';
import { empleados }  from '../../fakedata/empleados.json'
import { Employe } from '../../models/employes'

export default (req: Request, res: Response) => {
    const employe: Employe = req.body;
    empleados.push(employe);
    res.status(201).json(employe);
};