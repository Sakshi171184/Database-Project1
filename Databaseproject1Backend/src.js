const express = require('express');;
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const CORS=require('cors');
const db = require('./queries');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(CORS());

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  });

  app.get('/CRUD/Fetch', db.getUsers);
  app.get('/users/:id', db.getUserById);
  app.post('/CRUD/create', db.createUser);
  app.put('/CRUD/save/:id', db.updateUser);
  app.delete('/CRUD/Delete/:id', db.deleteUser);

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  });

