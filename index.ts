import express from 'express';
import entryPoint from './app';
import { constants } from './src/config/constants';

const app: express.Application = express();

//   entry point
app.use(entryPoint);

/// levanta al servidor
app.listen(constants, function () {
    console.log(`Servidor iniciado en  ${constants.port}`);
});