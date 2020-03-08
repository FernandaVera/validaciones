import listUsers from '../controllers/users/list';
import createUsers from '../controllers/users/create';
import deleteUsers from '../controllers/users/delete';
import updateUsers from '../controllers/users/update';
import getidUsers from '../controllers/users/getid';
import express, { Router } from 'express';
import userValidationSchema from '../middlewares/users';

const router : Router = express.Router();

// list of users
router.get('/list',listUsers);
// create user
router.post('/create', [userValidationSchema, createUsers]);
// delete user
router.delete('/delete/:id', deleteUsers);
// update user
router.put('/update', [userValidationSchema, updateUsers]);
// get by id
router.get('/find/:id', getidUsers);

///////// Employes 



export default router;