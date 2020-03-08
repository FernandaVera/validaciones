import { Request, Response, NextFunction } from 'express';
import { User, userSchema } from '../models/User'

export default (req: Request, res: Response, next: NextFunction) => {
        const user: User = req.body;
        const validation = userSchema.validate(user);

        if(validation.error){
            return res.status(400).json(validation.error.details);
    }

    next();
}