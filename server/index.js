const express = require('express');
const app = express();
const port = 8082;

app.get('/', (req, res) => {
  console.log('Get request received');
  res.status(201).send('Hello World');
})

app.listen(port, ()=> {
  console.log('SERVER RUNNING BITCH');
})