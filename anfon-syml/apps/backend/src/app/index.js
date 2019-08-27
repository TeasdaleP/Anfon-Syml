const express = require('express');
const bodyParser = require('body-parser');
const firebase = require('firebase');

const app = express();
app.use(bodyParser.json());

const config = require('./config/firebase')
firebase.initializeApp(config);

const { users, templates, communications } = require('./routes');

app.use('/', users);
app.use('/templates', templates);
app.use('/communications', communications);

const server = app.listen(8080, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
