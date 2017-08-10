const chai = require( 'chai' )
const chaiAsPromised = require( 'chai-as-promised' )
chai.use( chaiAsPromised )
const expect = chai.expect
const { getProductList, getShopperOrders, getRealShopper } = require('./database.js');


describe( 'getRealShopper()', ()=> {
  it( 'should return a list of all shoppers who bought at least one item', ()=> {
    return getRealShopper()
    .then( results => {
      console.log(results)
      expect(results[0]["shopper_name"]).to.equal('Beyonce')
      expect(results[1]["shopper_name"]).to.equal('Kobe')
      expect(results[1]["number_of_orders"]).to.equal('5')
      expect(results[4]["number_of_orders"]).to.equal('4')
    })
  })
})

describe( 'getProductList( section )', ()=> {
  it( 'should return a list for all items in a section', ()=> {
    return getProductList('bulk')
    .then( results => {
      console.log(results)
      expect(results[0]["product_name"]).to.equal('Flour')
      expect(results[1]["product_name"]).to.equal('Pasta')
      expect(results[1]["section"]).to.equal('bulk')
      expect(results[2]["section"]).to.equal('bulk')
    })
  })
})

describe( 'getShopperOrders( id )', ()=> {
  it( 'should return a list of all order for a user id', ()=> {
    return getShopperOrders('3')
    .then( results => {
      console.log(results)
      expect(results[0]["order_id"]).to.equal(3)
      expect(results[1]["order_id"]).to.equal(8)
      expect(results[0]["total_cost"]).to.equal('26.60')
      expect(results[1]["total_cost"]).to.equal('39.64')
    })
  })
})
