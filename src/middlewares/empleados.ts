import { Request, Response, NextFunction } from 'express';
import { Employe, employeSchema } from '../models/employes'

export default (req: Request, res: Response, next: NextFunction) => {
        const employes: Employe = req.body;
        const validation = employeSchema.validate(employes);

        if(validation.error){
            return res.status(400).json(validation.error.details);
    }

    next();
}