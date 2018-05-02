
// define NODE_ENV before anything else
let NODE_ENV: string = 'dev';
if (process.env.NODE_ENV &&
    ['test', 'dev', 'prod'].includes(process.env.NODE_ENV)) {
  NODE_ENV = process.env.NODE_ENV;
}

let PG_HOST: string = 'localhost';
if (process.env.PG_HOST) {
  if (process.env.PG_HOST == 'DOCKER_HOST') {
    if (!process.env.DOCKER_HOST) {
      throw new Error('DOCKER_HOST is not defined.');
    }
    PG_HOST = process.env.DOCKER_HOST
  } else {
    PG_HOST = process.env.PG_HOST;
  }
}

export {NODE_ENV, PG_HOST}
