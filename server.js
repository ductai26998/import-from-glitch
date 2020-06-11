// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

// https://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
  response.send('I love CodersX');
});

var todos = ['Đi chợ', 'Nấu cơm', 'Rửa bát', 'Học code tại CodersX'];

app.get('/todos', (req, res) => {
  res.render('index', {
    todos: todos
  });
});

app.get('/todos/search', (req, res) => {
  var q = req.query.q;
  var matchedTodos = todos.filter(function(item) {
    return item.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render('index', {
    todos: matchedTodos
  });
});

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
