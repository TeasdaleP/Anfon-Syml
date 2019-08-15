const express = require('express');
const router = express.Router();
const firebase = require('firebase');

const database = firebase.database().ref('/templates');
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

    const Title = req.body.title;
    const Channel = req.body.channel;
    const Content = req.body.content;
    const Today = new Date.now();
    const Reference = customfunc.randomString(10)

    database.child(Reference).set({
      title: Title,
      date: Today,
      surname: Surname,
      channel: Channel,
      content: Content
    });
    res.status(200).send('Success! You have successfully added a user!')
});

router.delete('/', (req, res) => {
    return res.status(418).send('Error : You wont be able to delete a user!');
});

module.exports = router;
