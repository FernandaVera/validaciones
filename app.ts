import express, { Application } from 'express';
import bodyParser from 'body-parser';
import usersRouters from './src/routes/userRoutes';
import authRoutes from './src/routes/authRoutes';
import tokenValidator from './src/middlewares/token';
import employesRouters from './src/routes/employesRoutes'

const app: Application = express();

// body parser
app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());

// users routes
app.use('/users', [tokenValidator, usersRouters]);

// employes routes 
app.use('/employees', employesRouters);

// Auth routes
app.use('/auth', authRoutes);

export default app;