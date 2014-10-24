
/**
 *
 * @example basic
 *
 * @description limited example
 * $ npm install express
 *
 */

var app
  , express = require('express')
  , subdomain = require('../lib/subdomain');

app = express();

app.use(subdomain({ base : 'localhost', removeWWW : true, domains:['resume'] }));

app.get('/subdomain/blog/', function(request, response) {
  response.end('BLOG.LOCALHOST: "/"');
});

app.get('/', function(request, response) {
  response.end('LOCALHOST: "/"');
});

app.get('/hello', function(request, response) {
  response.end('LOCALHOST: "/hello"');
});

app.listen(3000, function() {
  console.log('> listening on port 8000');
});
