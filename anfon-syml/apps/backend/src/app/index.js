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

app.listen(process.env.PORT, () =>
    console.log('Application Listening!'),
);
