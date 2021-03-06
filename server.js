const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      config = require('./config/DB'),
      customerRoutes = require('./expressRoutes/customerRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database: '+ err)}
  );

const app = express();
  app.use(bodyParser.json());
  app.use(cors());
const port = process.env.PORT || 8080;

app.use('/customers', customerRoutes);

var distDir = __dirname + "/public/";
app.use(express.static(distDir));
app.get('/*', function(req,res) {    
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});