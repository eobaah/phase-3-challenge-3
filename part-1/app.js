const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

const urlencodedParser = bodyParser.urlencoded({ extended: false })
const jsonParser = bodyParser.json()


app.get('/api/days/:day', function (request, response) {
  let day = request.params.day
  let daysOfWeek = {
    monday: 1,
    tuesday:2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    sunday: 7
  }

  let answer = daysOfWeek[day]

  // !daysOfWeek[day] ? response.status(400).send(`'${day}' is not a valid day!`) : response.header({ContentType: "application/text"}).status(200).json( answer )

  if (!daysOfWeek[day]) {
    response.status(400).send(`'${day}' is not a valid day!`)
  } else {
    response.header({ContentType: "application/text"}).status(200).json( answer )
  }

})

app.post( '/api/array/concat/urlencoded/', urlencodedParser, function ( request, response ) {
  console.log( "request.body:", request.body )
  let body = request.body
  if( !body || !body.array1 || !body.array2 ) {
    response.status(400).send(`{"error": "A body does not exist or you have an empty array."}`)
  }

  let array1 = body.array1
  let array2 = body.array2
  if( !Array.isArray( (JSON.parse(array1)) ) || !Array.isArray( JSON.parse(array2) ) ) {
      response.status(400).send(`{"error": "Input data should be of type Array."}`)
  } else {
    let answer = JSON.parse(array1).concat(JSON.parse(array2))
    response.status(200).json({"result": answer})
}



})

app.post('/api/array/concat/', jsonParser, function (request, response) {
  let body = request.body
  let array1 = (body.array1)
  let array2 = (body.array2)
  console.log(body)
  !Array.isArray((array1)) || !Array.isArray((array2)) ? response.status(400).send(`{"error": Input data should be of type Array}`) :
  response.set('Content-Type', 'application/json').status(200).json( {"result": ( array1 ).concat( (array2) ) } )


})


app.listen( port, function () {
  console.log( `Your application is ready on port ${port}` )
})
