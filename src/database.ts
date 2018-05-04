import * as Knex from 'knex';
import {PG_HOST} from './config';


let dburl = `postgres://testdbuser:password@${PG_HOST}:5432/pizzajerry`;

const database = Knex({client: 'pg', connection: dburl});

export default database;
