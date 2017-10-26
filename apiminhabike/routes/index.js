var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/thelist', function(req, res){
 
  // Get a Mongo client to work with the Mongo server
  var MongoClient = mongodb.MongoClient;
 
  // Define where the MongoDB server is
  var url = 'mongodb://localhost:27017/mihabike';
 
 
  MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Habilitando conexão server', err);
  } else {
    
    console.log('Conexão', url);
 
   
    var collection = db.collection('minhasbicicletas');
 
  
    collection.find({}).toArray(function (err, result) {
      if (err) {
        res.send(err);
      } else if (result.length) {
        res.render('bicicletalist',{
 
 
          "bicicletalist" : result
        });
      } else {
        res.send('Não existe');
      }
      
      db.close();
    });
  }
  });
});

// Route para inserir uma nova bicicleta  
router.get('/novabike', function(req, res){
    res.render('novabike', {title: 'Adicionar bike' });
});


module.exports = router;
