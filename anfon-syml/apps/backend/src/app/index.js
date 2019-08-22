var express = require("express");
var bodyParser = require("body-parser");
var firebase = require("firebase");

var app = express();
app.use(bodyParser.json());

var firebaseConfig = {
  apiKey: "AIzaSyD2wURbsSpJ0GJzkSkNkQgFgyli5osfVv8",
  authDomain: "anfon-syml.firebaseapp.com",
  databaseURL: "https://anfon-syml.firebaseio.com",
  projectId: "anfon-syml",
  storageBucket: "anfon-syml.appspot.com",
  messagingSenderId: "956001413127",
  appId: "1:956001413127:web:b43ce18a82f59f62"
};

firebase.initializeApp(firebaseConfig);

// ----------------------------------
// -- Main
app.get("/", function(req, res) {
    console.log("HTTP GET Request");
    var userReference = firebase.database().ref("/");
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

app.put("/", function(req, res) {
    console.log("HTTP PUT Request");
    var TemplateReference = randomString(5);
    var CreateDate = Date.now();
    var Reference = req.body.username;

    var Request = {
      id: randomString(10),
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
    .set(Request);
});

app.post("/", function(req, res) {
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

app.delete("/", function(req, res) {
  console.log("HTTP DELETE Requested");
  res.send("Cannot delete user information");
});

// ----------------------------------
// -- Communications
app.get("/:id/communications", function(req, res) {
    console.log("HTTP GET Request");
});

app.put("/:id/communications", function(req, res) {
    console.log("HTTP PUT Request");
});

app.post("/:id/communications", function(req, res) {
    console.log("HTTP POST Request");
});

app.delete("/:id/communications", function(req, res) {
    console.log("HTTP DELETE Requested");
});

// ----------------------------------
// -- Templates
app.get("/:id/templates", function(req, res) {
    console.log("HTTP GET Request");
});

app.put("/:id/templates", function(req, res) {
    console.log("HTTP PUT Request");
});

app.post("/:id/templates", function(req, res) {
    console.log("HTTP POST Request");
});

app.delete("/:id/templates", function(req, res) {
    console.log("HTTP DELETE Requested");
});

// ----------------------------------
// -- Server Config
var server = app.listen(8080, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});

function randomString(length) {
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split(
    ""
  );
  if (!length) {
    length = Math.floor(Math.random() * chars.length);
  }
  var str = "";
  for (var i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}


