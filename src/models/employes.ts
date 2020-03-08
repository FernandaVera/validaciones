import joi from '@hapi/joi'

export type Employe = {
    id: string;
    nombre: string;
    edad: number;
    cargo: string;
};

export const employeSchema = joi.object().keys({
    id: joi.string().required(),
    nombre: joi.string().required(),
    edad: joi.string().alphanum().required(),
    cargo: joi.string().required()
});

