# %appname%



## Installation

```bash
git clone .../%appname%.git
# or git pull
cd %appname%
yarn install # && yarn install:database
yarn test && pm2 start node/%appname% [-- -p 8000]
```
