
const user_router=require('./routing')
const express = require('express');
const app = express();
const PORT = 3200;

// Define a basic route

app.use('/user',user_router)
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});