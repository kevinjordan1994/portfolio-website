`use strict`;

const express = require(`express`);
const bodyParser = require(`body-parser`);
const ejs = require(`ejs`);
const age = require(__dirname + `/age.js`);

const app = express();
const myAge = age.getAge();

app.set(`view engine`, `ejs`);
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render(`home`, { myAge: myAge });
});

app.listen(3000);
