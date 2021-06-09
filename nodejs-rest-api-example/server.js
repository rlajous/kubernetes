'use strict';

var express = require('express');
var app = express();
app.set("port", process.env.PORT || 4000);
var bodyParser= require('body-parser');
const { User, validate } = require("./user");

require("./mongodb")();
app.use(bodyParser.json({
   limit: '50mb'
 }));
 
 app.use(bodyParser.urlencoded({
   limit: '50mb',
   parameterLimit: 100000,
   extended: true 
 }));

app.get('/version', (req, res) => {
  res.send("This is a new version\n");
   
})


app.get('/', (req, res) => {

   //await new Promise(resolve => setTimeout(resolve, 1000));
   User.find().then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send("Error\n")
    });
   
})

app.get('/:id', (req, res) => {
   
   const { id } = req.params;
   User.findById(id).then(result => {
      console.log(result)
      res.send(result);
    })
    .catch(err => {
      console.log(err);
      res.send("Error\n")
    });
})

app.post('/', async (req, res) => {
  /*const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if(user) return res.status(400).send("El email ya se encuentra registrado.");   

  user = new User(req.body);
  await user.save();
  res.status(200).send(user);*/

  

   User.find({ email: req.body.email }).then(result => {
      console.log(result, result.length);
      if (result.length !== 0) return res.status(400).send("El email ya se encuentra registrado.");   
      let user = new User(req.body);
      user.save().then(user => {
         return res.status(200).send(user);
      })
      .catch(err => {
         console.log(err);
         res.send("Error\n")
      });
    })
    .catch(err => {
      console.log(err);
      res.send("Error\n")
    });;

   
})

// app.put('/', function (req, res) {
//    res.writeHead(200, {'Content-Type': 'application/json'});
//    var response = { "response" : "This is PUT method." }
//    console.log(response);
//    res.end(JSON.stringify(response));
// })

// app.delete('/', function (req, res) {
//    res.writeHead(200, {'Content-Type': 'application/json'});
//    var response = { "response" : "This is DELETE method." }
//    console.log(response);
//    res.end(JSON.stringify(response));
// })

var server = app.listen(app.get("port"), function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Node.js API app listening at http://%s:%s", host, port)

})
