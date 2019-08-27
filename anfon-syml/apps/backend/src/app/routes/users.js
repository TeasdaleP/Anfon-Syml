const express = require('express');
const router = express.Router();
const firebase = require('firebase');

const customfunc = require('../config/functions');


router.get('/', (req, res) => {
  console.log("HTTP GET Request");
    const userReference = firebase.database().ref("/");
    userReference.on(
      "value",
      function(snapshot) {
        console.log(snapshot.val());
        res.json(snapshot.val());
        userReference.off("value");
      },
      function(errorObject) {
        console.log("The read failed: " + errorObject.code);
        res.send("The read failed: " + errorObject.code);
      }
    );
});

router.put('/', (req, res) => {
  console.log("HTTP PUT Request");
  var TemplateReference = randomString(5);
  var CreateDate = Date.now();
  var Reference = req.body.username;

  var Request = {
    id: customfunc.randomString(10),
    firstname: req.body.firstname,
    surname: req.body.surname,
    username: req.body.username,
    password: req.body.password,
    contact: {
      telephone: req.body.contact.telephone,
      email: req.body.contact.email
    },
    templates: [
      {
        id: TemplateReference,
        title: req.body.templates[0].title,
        date: CreateDate,
        channel: req.body.templates[0].channel,
        content: req.body.templates[0].content
      }
    ],
    communications: [
      {
        customer: {
          reference: req.body.communications[0].customer.reference,
          email: req.body.communications[0].customer.email,
          telephone: req.body.communications[0].customer.telephone
        },
        date: CreateDate,
        templates: TemplateReference
      }
    ]
  };

  firebase
  .database()
  .ref(Reference)
  .set(Request);;
});

router.post('/', (req, res) => {
  console.log("HTTP POST Request");

  var Reference = req.body.id;
  var Field = req.body.field;
  var Value = req.body.value;

  firebase
  .database()
  .ref(Reference)
  .child(Field)
  .update(Value);
});

router.delete('/', (req, res) => {
    return res.status(418).send('Error : You wont be able to delete user information!');
});

module.exports = router;
