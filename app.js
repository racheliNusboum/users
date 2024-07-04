const express = require('express');
require('dotenv').config()
const app = express();
const user_router = require('./routing')

const { HOST, PORT } = process.env;

app.use('/user',user_router);


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});