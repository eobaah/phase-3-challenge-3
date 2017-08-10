DROP DATABASE IF EXISTS grocery_store;
CREATE DATABASE grocery_store;

\c grocery_store

CREATE TABLE IF NOT EXISTS grocery_items(
  id SERIAL PRIMARY KEY,
  name VARCHAR(140),
  price NUMERIC(5,2),
  section VARCHAR(140));


CREATE TABLE IF NOT EXISTS shoppers(
  id SERIAL PRIMARY KEY,
  fname VARCHAR(140),
  lname VARCHAR(140),
  email VARCHAR(140));


CREATE TABLE IF NOT EXISTS orders(
  id SERIAL PRIMARY KEY,
  order_date DATE NOT NULL DEFAULT CURRENT_DATE,
  shopper_id INTEGER REFERENCES shoppers(id));


CREATE TABLE IF NOT EXISTS cart(
  id INTEGER REFERENCES orders(id),
  item_id INTEGER REFERENCES grocery_items(id));
