const express = require('express');
const app = express();
const port = 3200;
const user_router = require('./routing')
app.use('/user',user_router);
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});