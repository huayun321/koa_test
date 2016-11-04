var app = require('../app');
var request = require('supertest').agent(app.listen());

describe('hello world', function() {
   it('should say hello world', function(done) {
        request
            .get('/')
            .expect(200)
            // .end(function(err, res) {
            //    if(err) throw err;
            //     console.log(res);
            //     done();
            // });
            .expect('hello world', done);
   });
});