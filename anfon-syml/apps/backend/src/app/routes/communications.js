const express = require('express');
const router = express.Router();
const firebase = require('firebase');

const database = firebase.database().ref('/communications');
const customfunc = require('../config/functions');

router.get('/communications', (req, res) => {
  database.on("value", function(snapshot) {
      console.log(snapshot.val());
      res.json(snapshot.val());
      database.off("value");
    },
    function(errorObject) {
        console.log("The read failed: " + errorObject.code);
        res.send("The read failed: " + errorObject.code);
    });
});

router.put('/communications', (req, res) => {
    return res.status(418).send('Error : You wont be able to update anything here!');
});

router.post('/communications', (req, res) => {
  var Reference = req.body.id;
  var CreateDate = Date.now();
  var Request = [];

  for (var i = 0; i < req.body.communications.length; i++) {
      var Object = {
          customer: {
              reference: req.body.communications[i].customer.reference,
              email: req.body.communications[i].customer.email,
              telephone: req.body.communications[i].customer.telephone
          },
          date: CreateDate,
          template: req.body.communications[i].template
      }
      Request.push(Object);
  }

  firebase
      .database()
      .ref(Reference)
      .child('communications')
      .set(Request)
});

router.delete('/communications', (req, res) => {
    return res.status(418).send('Error : You wont be able to delete a user!');
});

module.exports = router;
