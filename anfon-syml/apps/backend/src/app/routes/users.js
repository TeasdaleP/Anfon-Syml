const express = require('express');
const router = express.Router();
const firebase = require('firebase');
const database = firebase.database();
const customfunc = require('../config/functions');
const reference = database.ref('/Users');

router.get('/', (req, res) => {
    reference.on("value",
        function(snapshot) {
            res.json(snapshot.val());
            reference.off("value");
        },
        function(errorObject) {
            res.send("The read failed: " + errorObject.code);
        });
});

router.put('/', (req, res) => {
    return res.status(418).send('Error : You wont be able to update anything here!');
});

router.post('/', (req, res) => {
    reference.once("value", function(snapshot) {
        console.log(snapshot.val());
    })

    const firstname = req.body.firstname;
    const surname = req.body.surname;
    const telephone = req.body.contact.telephone;
    const email = req.body.contact.email;

    const postUsers = reference.child(surname + ',' + firstname);
    postUsers.set({
        Reference: customfunc.randomString(10),
        Firstname: firstname,
        Surname: surname,
        Contact: [{
            Reference: customfunc.randomString(5),
            Telephone: telephone,
            Email: email
        }]
    });

    if (database.ref('/Users/' + surname + ',' + firstname)) {
        return res.status(200).send('User Added Successful')
    } else {
        return res.status(400).send('Error: Something has gone wrong here!')
    }
});

router.delete('/', (req, res) => {
    return res.status(418).send('Error : You wont be able to delete anything here!');
});

// - This will be amended to search for user/:id

module.exports = router;
