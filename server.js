const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();
console.log("Current working directory: ", process.cwd());


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Now Listening... running on port ${PORT}!`);
  });
});