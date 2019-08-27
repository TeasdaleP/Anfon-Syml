const express = require('express');
const router = express.Router();
const firebase = require('firebase');

const database = firebase.database().ref('/templates');
const customfunc = require('../config/functions');


router.get('/template', (req, res) => {
  return res.status(418).send('Error : You wont be able to get anything here!');
});

router.put('/template', (req, res) => {
    return res.status(418).send('Error : You wont be able to update anything here!');
});

router.post('/template', function(req, res) {
  var Reference = req.body.id;
  var CreateDate = Date.now();
  var Request = [];
  var i;

  for (i = 0; i < req.body.templates.length; i++) {
      var Object = {
          id: customfunc.randomString(5),
          title: req.body.templates[i].title,
          date: CreateDate,
          channel: req.body.templates[i].channel,
          content: req.body.templates[i].content
      }
      Request.push(Object);
  }

  firebase
      .database()
      .ref(Reference)
      .child('templates')
      .set(Request)
});

router.delete('/template', (req, res) => {
    return res.status(418).send('Error : You wont be able to delete a user!');
});

module.exports = router;
