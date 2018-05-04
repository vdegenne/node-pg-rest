import * as commandLineArgs from 'command-line-args';
import * as http from 'http';

import app from './app';



// we get the port option
const portOption: commandLineArgs.OptionDefinition = {
  name: 'port',
  alias: 'p',
  description: 'Define the port which the app is going to use.',
  type: Number,
  defaultValue: 3000
};
const port = commandLineArgs([portOption]).port;

// create server and listen to
const server = http.createServer(app);

server.listen(port, () => console.log(`Listening on ${port}`));
