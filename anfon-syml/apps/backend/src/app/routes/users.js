const express = require('express');
const router = express.Router();
const firebase = require('firebase');

const database = firebase.database().ref('/users');
const customfunc = require('../config/functions');


router.get('/', (req, res) => {
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

router.put('/', (req, res) => {
    return res.status(418).send('Error : You wont be able to update anything here!');
});

router.post('/', (req, res) => {
    database.once("value", function(snapshot) {
        console.log(snapshot.val());
    })

    const Firstname = req.body.firstname;
    const Surname = req.body.surname;
    const Password = req.body.password;
    const Telephone = req.body.contact.telephone;
    const Email = req.body.contact.email;
    const Reference = customfunc.randomString(10)

    database.child(Reference).set({
      id: Reference,
      firstname: Firstname,
      surname: Surname,
      password: Password,
      contact: {
        telephone: Telephone,
        email: Email
      },
      templates: [],
      communications: []
    });
    res.status(200).send('Success! You have successfully added a user!')
});

router.delete('/', (req, res) => {
    return res.status(418).send('Error : You wont be able to delete a user!');
});

module.exports = router;
