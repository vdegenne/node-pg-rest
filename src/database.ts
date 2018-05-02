import * as Knex from 'knex';
import {PG_HOST} from './config';

let dburl = `postgres://%dbuser%:%dbpasswd%@${PG_HOST}:5432/%dbname%`;

// use the following if you need to have different credentials base on the
// NODE_ENV
/* switch (NODE_ENV) {
  case 'dev':
  case 'test':
     dburl = `postgres://testdbuser:password@${PG_HOST}:5432/pizzajerry`;
     break;
  case 'prod':
    // rewrite dburl if the credentials are different for production
    dburl = `postgres://testdbuser:password@${PG_HOST}:5432/pizzajerry`;
    break;
} */



const database = Knex({client: 'pg', connection: dburl});

export default database;
