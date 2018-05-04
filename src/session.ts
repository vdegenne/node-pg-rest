import * as connect from 'connect-redis';
import {RequestHandler} from 'express';
import * as Session from 'express-session';
import {createClient} from 'redis';

import {REDIS_HOST} from './config';

const RedisStore = connect(Session);

let resolve: any, reject: any;
let session: Promise<RequestHandler> = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});

// client
const client = createClient({host: REDIS_HOST, port: 6379});

// on error
client.on('error', (err: Error) => reject(err));

// on success
client.on('ready', () => {
  console.info('The session handler is ready');
  resolve(Session({
    store: new RedisStore({client: client}),
    secret: 'bigsecret',
    resave: false,
    saveUninitialized: false
  }));
});


export default session;
