create table pizzas (
  id serial primary key,
  name varchar(50) not null,
  toppings varchar(100) not null
);

create table customers (
  id serial primary key,
  firstname varchar(50) not null,
  lastname varchar(50) not null,
  favorite_pizza bigint references pizzas (id) on update cascade on delete cascade
);
