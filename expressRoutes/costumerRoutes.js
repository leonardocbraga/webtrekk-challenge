var express = require('express');
var app = express();
var costumerRoutes = express.Router();

// Require Item model in our routes module
var Costumer = require('../models/Costumer');

// Defined store route
costumerRoutes.route('/add').post(function (req, res) {
  var costumer = new Costumer(req.body);
   costumer.save()
    .then(item => {
    res.status(200).json({'costumer': 'Costumer added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
costumerRoutes.route('/').get(function (req, res) {
   Costumer.find(function (err, costumers){
    if(err){
      console.log(err);
    }
    else {
      res.json(costumers);
    }
  });
});

// Defined edit route
costumerRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Costumer.findById(id, function (err, costumer){
      res.json(costumer);
  });
});

//  Defined update route
costumerRoutes.route('/update/:id').post(function (req, res) {
   Costumer.findById(req.params.id, function(err, costumer) {
    if (!costumer)
      return next(new Error('Could not load Document'));
    else {
      costumer.name = req.body.name;
      costumer.gender = req.body.gender;

      costumer.save().then(costumer => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
costumerRoutes.route('/delete/:id').get(function (req, res) {
   Costumer.findByIdAndRemove({_id: req.params.id}, function(err, costumer){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = costumerRoutes;