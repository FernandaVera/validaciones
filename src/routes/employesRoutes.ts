import listEmployes from '../controllers/employes/list';
import createEmployes from '../controllers/employes/create';
import deleteEmployes from '../controllers/employes/delete';
import updateEmployes from '../controllers/employes/update';
import getidEmployes from '../controllers/employes/getid';
import express, { Router } from 'express';
import employeValidationSchema from '../middlewares/empleados';

const router : Router = express.Router();

// list of employes
router.get('/list', listEmployes);
// create employe
router.post('/create', [employeValidationSchema, createEmployes]);
// delete employe
router.delete('/delete/:id', deleteEmployes);
// update employe
router.put('/update', [employeValidationSchema, updateEmployes]);
// get by id of employe
router.get('/find/:id', getidEmployes);

export default router;