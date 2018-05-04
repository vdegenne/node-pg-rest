# node-pg-rest-starter

## Installation

```bash
github-fetch-starter -p \
                    dbname=mydatabase \
                    dbuser=myuser \
                    dbpasswd=mypassword \
                    masterdomain=mydomain.com \
                    localmasterdomain=mydomain.local
                    -n myapp \
                    node-pg-rest-starter
cd myapp
```

## Post Installation

- Run `npm i` to install the dependencies.
- Run `npm run install:database` if you need to install the database.
- Run `npm run test:watch` to start watching for changes and unit testing.
- Remove this readme and rename `README.md.template` to `README.md` with your own content.

## Running the app

```bash
npm start [-p <port>] [--disable-session]
```
