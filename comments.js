//create web server
const express = require('express');
const app = express();

//create port
const port = 3000;

//create data
const comments = [
  { name: 'John', comment: 'Hello!' },
  { name: 'Tim', comment: 'I am Tim.' },
  { name: 'Linda', comment: 'I am Linda.' },
  { name: 'Mike', comment: 'Hello!' }
];

//create route
app.get('/comments', (req, res) => {
  res.send(comments);
});

//listen to port
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`);
});