const pgp = require('pg-promise')();

const CONNECTION_STRING = `pg://${process.env.USER}@localhost:5432/grocery_store`
const db = pgp( CONNECTION_STRING )

const getProductList = ( section ) => {
  return db.any(`
    SELECT grocery_items.name AS Product_name, grocery_items.section AS Section
    FROM grocery_items
    WHERE grocery_items.section='${section}'
  `)
}

const getShopperOrders = ( shopperId ) => {
  return db.any(`
    SELECT orders.id AS order_id, SUM(grocery_items.price) AS total_cost FROM orders
    JOIN cart
    ON orders.id = cart.id
    JOIN grocery_items
    ON cart.item_id = grocery_items.id
    JOIN shoppers
    ON shoppers.id = orders.shopper_id
    WHERE shoppers.id = ${shopperId}
    GROUP BY orders.id
  `)
}

const getRealShopper = () => {
  return db.any(`
    SELECT shoppers.fname AS shopper_name, COUNT(orders.id) AS number_of_orders FROM shoppers
    JOIN orders
    ON shoppers.id = orders.shopper_id
    GROUP BY shoppers.id
  `)
}

module.exports = {
  getProductList,
  getShopperOrders,
  getRealShopper
}
