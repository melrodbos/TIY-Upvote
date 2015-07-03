// Get a database reference to our posts
var ref = new Firebase("https://docs-examples.firebaseio.com/web/saving-data/fireblog/posts");

// Attach an asynchronous callback to read the data at our posts reference
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

//Ask a question controller...
// $.ajax('https://glowing-inferno-3333.firebaseio.com/foo.json', {
//   method: ‘PUT'
// data: '[ … ]'
// }).then(tracer)

$.ajax('http://intense-torch-7857.firebaseio.com/answers.json', {
  method: 'GET'
  data: '[ ]'
}).then(tracer)



  app.controller('AskController', function($scope) {
    var firebase = new Firebase('http://intense-torch-7857.firebaseio.com');
    var ask = this;


    ask = [];
    $http.post(firebase);
    .then(function(data) {

      this.ask = {};
    };
  });
