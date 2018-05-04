import * as http from 'http';

import app from './app';
import {PORT} from './config';


// create server and listen to
const server = http.createServer(app);

server.listen(PORT, () => console.log(`Now listening on ${PORT}...`));
