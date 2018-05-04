import * as express from 'express';

import {ENABLE_SESSION, NODE_ENV} from '../config';

import {customerRouter} from './customer.router';


const app: express.Application = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

(async () => {
  // session middleware before all
  if (ENABLE_SESSION) {
    try {
      const {session} = require('../session');
      app.use(await session);
      app.use((req, res, next) => {
        if (!req.session.user) {
          req.session.user = { name: 'guest', roles: ['GUEST'] }
        }
        next();
      })
    } catch (e) {
      console.error(e.message);
      process.exit(1);
    }
  }

  // morgan
  NODE_ENV !== 'test' && app.use(require('morgan')('dev'));
  // ping
  app.get('/ping', async (req, res) => res.end('pong\n'));

  // routers
  app.use('/customers', customerRouter);
})();


export default app;
