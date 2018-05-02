import {Cream, RelationMappings} from './objection-cream';
import Customer from './Customer';


class Pizza extends Cream {
  id !: number;
  name !: string;
  toppings !: string;

  customers?: Customer[];

  static tableName = 'pizzas';
  static relationMappings: RelationMappings = {
    customers: {
      relation: Cream.HasManyRelation,
      modelClass: `${__dirname}/Customer`,
      join: {from: 'pizzas.id', to: 'customers.id'}
    }
  }
}



export default Pizza;
