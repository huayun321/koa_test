var koa = require('koa');
var app = module.exports = koa();

app.use(function *() {
   this.body = 'hello world';
});

app.listen('3000');