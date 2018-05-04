import * as commandLineArgs from 'command-line-args';
import commandArgs from './args';

/**
 * Command Line arguments
 */
const args = commandLineArgs(commandArgs);
const PORT = args.port;
const ENABLE_SESSION = !args['disable-session'];

/**
 * Constants
 */
// NODE_ENV
let NODE_ENV: string = 'prod';
if (process.env.NODE_ENV &&
    ['test', 'dev', 'prod'].includes(process.env.NODE_ENV)) {
  NODE_ENV = process.env.NODE_ENV;
}

// PG_HOST
let PG_HOST: string = 'localhost';
if (process.env.PG_HOST) {
  if (process.env.PG_HOST === 'DOCKER_HOST') {
    if (!process.env.DOCKER_HOST) {
      throw new Error('DOCKER_HOST is not defined.');
    }
    PG_HOST = process.env.DOCKER_HOST
  } else {
    PG_HOST = process.env.PG_HOST;
  }
}

// REDIS_HOST
let REDIS_HOST: string = 'localhost';
if (process.env.REDIS_HOST) {
  if (process.env.REDIS_HOST === 'DOCKER_HOST') {
    if (!process.env.DOCKER_HOST) {
      throw new Error('DOCKER_HOST is not defined.');
    }
    REDIS_HOST = process.env.DOCKER_HOST
  } else {
    REDIS_HOST = process.env.REDIS_HOST;
  }
}



export {NODE_ENV, PG_HOST, REDIS_HOST, PORT, ENABLE_SESSION}
