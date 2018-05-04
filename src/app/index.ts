import * as express from 'express';

import {NODE_ENV} from '../config';
import session from '../session';

import {customerRouter} from './customer.router';


const app: express.Application = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

(async () => {
  // session ? before anything else
  if (true) {
    try {
      app.use(await session);

    } catch (e) {
      console.error(e.message);
      process.exit(1);
    }
  }

  // morgan
  NODE_ENV !== 'test' && app.use(require('morgan')('dev'));
  // ping
  app.get('/ping', async (req, res) => res.end('pong\n'));

  /**
   * routers
   */
  app.use('/customers', customerRouter);
})();


export default app;
