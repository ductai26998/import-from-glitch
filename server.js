// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require('express');
const app = express();


app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// https://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
  response.send('I love CodersX');
});

var todos = [
  {todo:'Đi chợ'}, 
  {todo:'Nấu cơm'}, 
  {todo:'Rửa bát'}, 
  {todo: 'Học code tại CodersX'}];

app.get('/todos', (req, res) => {
  res.render('index', {
    todos: todos
  });
});

app.get('/todos/search', (req, res) => {
  var q = req.query.q;
  var matchedTodos = todos.filter(function(item) {
    return item.todo.toLowerCase().indexOf(q.todo.toLowerCase()) !== -1;
  });
  res.render('index', {
    todos: matchedTodos
  });
});

app.get('/todos/create', (req, res) => {
  res.render('create');
});

app.post('/todos/create', (req, res) => {
  todos.push(req.body);
  res.redirect('/todos');
});

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
