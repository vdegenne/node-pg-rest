import * as Knex from 'knex';
import {PG_HOST} from './config';


let dburl = `postgres://%dbuser%:%dbpasswd%@${PG_HOST}:5432/%dbname%`;

const database = Knex({client: 'pg', connection: dburl});

export default database;
