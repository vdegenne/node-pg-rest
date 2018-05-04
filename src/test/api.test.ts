import * as chai from 'chai';
import {Response} from 'superagent';
import * as supertest from 'supertest';

import app from '../app';


const expect = chai.expect;


suite('Customer', () => {
  test('returns a customer with a favorite pizza', async () => {
    await supertest(app).get('/customers/1').expect((res: Response) => {
      expect(JSON.parse(res.text).favoritePizza.name).to.equal('jerrycheese');
    });
  });

  test('returns 404 if no customer', async () => {
    await supertest(app).get('/customers/2').expect((res: Response) => {
      expect(res.status).to.equal(404);
    });
  });
});
