import {Cream, RelationMappings} from './objection-cream';
import Pizza from './Pizza';


class Customer extends Cream {
  id !: number;
  firstname !: string;
  lastname !: string;
  favoritePizza?: Pizza;

  static tableName = 'customers';
  static relationMappings: RelationMappings = {
    favoritePizza: {
      relation: Cream.HasOneRelation,
      modelClass: `${__dirname}/Pizza`,
      join: {from: 'customers.favorite_pizza', to: 'pizzas.id'}
    }
  }
}

export default Customer;
