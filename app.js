
const user_router=require('./routing')
const express = require('express');
const app = express();
require('dotenv').config()
const {HOST,PORT} = process.env;
app.use('/user',user_router)
app.get('/', (req, res) => {
  res.send('open conaction!');
});

app.listen(PORT, () => {

  console.log(`Server is running on http://${HOST}:${PORT}`);
});