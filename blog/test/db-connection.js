var MongoClient = require('mongodb').MongoClient;
require('co-mocha');

describe('db connetion', function() {
   it('should not throw error', function * (){
       // Connection URL
       var url = 'mongodb://localhost:27017/myproject';
       // Use connect method to connect to the Server
       var db = yield MongoClient.connect(url);
       // Close the connection
       db.close();
   });
});