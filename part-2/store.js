const {getProductList, getShopperOrders, getRealShopper} = require('./database.js');


let productList = (argument) => {
  let prdLength = `Product Name`.length
  let secLength = `Section`.length
  console.log(`|--------------+---------+`)
  console.log(`| Product Name | Section |`)
  console.log(`|--------------+---------+`)
  let list = getProductList(argument).then( items => items.map( (item)=> { console.log("| "+(item.product_name) + (" ").repeat(prdLength - item.product_name.length) + " | " + (item.section)+ (" ").repeat(secLength - item.section.length)+" |" )}))
  .then( ()=> console.log(`|--------------+---------+`) )
}

let ordersByShopper = (argument) => {
  let orderLength = `Order Id`.length
  let costLength = `Total Cost`.length
  console.log(`|----------+------------+`)
  console.log(`| Order Id | Total Cost |`)
  console.log(`|----------+------------+`)
  let list = getShopperOrders(argument).then( items => items.map( (item)=> {
    console.log( "| " + ( " " ).repeat( orderLength - item.order_id.toString().length ) +
    ( item.order_id ) + " | "  +
    ( " " ).repeat( costLength - item.total_cost.length ) +
    ( item.total_cost ) +
    " |" ) } )
  ).then( ()=> console.log( `|----------+------------+` ) )
}

let realShopers = () => {
  let nameLength = `Shopper Name`.length
  let orderNumLength = `Number of Orders`.length
  console.log(`|--------------+------------------+`)
  console.log(`| Shopper Name | Number of Orders |`)
  console.log(`|--------------+------------------+`)
  let list = getRealShopper().then( items => items.map( (item)=> {
    console.log( "| " +
    ( item.shopper_name ) +
    ( " " ).repeat( nameLength - item.shopper_name.length ) +
    " | "  +
    ( " " ).repeat( orderNumLength - item.number_of_orders.length ) +
    ( item.number_of_orders ) +
    " |" ) } )
  ).then( ()=> console.log( `|--------------+------------------+` ) )
}

let func = process.argv[2]
let argument = process.argv[3]

switch (func) {
  case "product-list": productList(argument)
  break;
  case "shopper-orders": ordersByShopper(argument)
    break;
  case "real-shoppers": realShopers()
    break;
  default:

}

module.exports = {
  productList,
  ordersByShopper,
  realShopers
}
