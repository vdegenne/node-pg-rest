import * as chai from 'chai';
import Pizza from '../models/Pizza';
import Customer from '../models/Customer';

const expect = chai.expect;

suite('Pizza Model', () => {
  test('it contains one initial element', async() => {
    expect(await Pizza.count()).to.equal(1);
  });
});

suite('Customer Model', () => {
  test('a customer has a fav pizza', async() => {
    const customer = (await Customer.query().eager('favoritePizza').limit(1));

    expect(customer[0].favoritePizza.name).to.equal('jerrycheese');
  });
});
