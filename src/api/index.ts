import * as express from 'express';
import {customerRouter} from './customer.router';
import database from '../database';
import * as http from 'http';


const api: express.Express = express();

// use morgan
if (!(process.env.NODE_ENV && process.env.NODE_ENV === 'test')) {
  api.use(require('morgan')('dev'));
}

api.use(express.json());
// ping
api.get('/ping', async(req, res) => res.end('pong\n'));


/**
 * routers
 */
api.use('/customers', customerRouter);


export default api;
