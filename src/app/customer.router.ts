import {Router} from 'express';

import Customer from '../models/Customer';

import {checkAuthorization} from './security';
import {filterParams} from './util';

const router: Router = Router();


router.get('/:customerId', async (req, res) => {
  await filterParams(req.params);

  switch (typeof req.params.customerId) {
    case 'number':

      const customer = (await Customer.query()
                            .where('id', req.params.customerId)
                            .eager('favoritePizza'))[0];

      if (customer) {
        res.json(customer);
      } else {
        res.status(404).end();
      }
      return;
    case 'string':
    default:
      res.status(400).json(
          {success: false, message: 'customerId needs to be an integer'});
      return;
  }
});


router.post('/', async (req, res) => {
  if (checkAuthorization(req, res, 'ADMIN')) {
    res.send('hello world');
  } else {
    res.status(401).end();
  }
});


export {router as customerRouter};
