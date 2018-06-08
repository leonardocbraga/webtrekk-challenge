const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      config = require('./config/DB'),
      costumerRoutes = require('./expressRoutes/costumerRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database: '+ err)}
  );

const app = express();
  app.use(bodyParser.json());
  app.use(cors());
const port = process.env.PORT || 8080;

app.use('/costumers', costumerRoutes);
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req,res) {  
  res.sendFile(path.join(__dirname+'/dist/index.html'));
});

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});