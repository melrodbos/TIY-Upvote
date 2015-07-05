/* global angular */
(function(){
'use strict';

var app = angular.module('tiy-upvote', ['ng-route', 'restangular']);
//Ask a question controller...
app.cotroller("AskController", function(){
  //substitute "product" for "question"
  this.question = {};
// Push review onto this "ask" questions "array"...
  this.addQuestion = function(ask) {
    ask.questions.push(this.question);
    this.question = {};
  };

});
});

// app.controller("AskController", function($scope) {
//   $scope.post = {title: '', question: ''};
//
// });
//Start of Route...
// app.config(function($routeProvider){
//   $routeProvider
//     .when('/', {
//       templateUrl: 'views/ask.html',
//       controller: 'AskController'
//     })
// });//End of Route...













// // Get a database reference to our posts
// var ref = new Firebase("https://docs-examples.firebaseio.com/web/saving-data/fireblog/posts");
//
// // Attach an asynchronous callback to read the data at our posts reference
// ref.on("value", function(snapshot) {
//   console.log(snapshot.val());
// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });
//
// //Ask a question controller...
// // $.ajax('https://glowing-inferno-3333.firebaseio.com/foo.json', {
// //   method: ‘PUT'
// // data: '[ … ]'
// // }).then(tracer)
//
// $.ajax('http://intense-torch-7857.firebaseio.com/answers.json', {
//   method: 'GET'
//   data: '[ ]'
// }).then(tracer)
//
//
//
//   app.controller('AskController', function($scope) {
//     var firebase = new Firebase('http://intense-torch-7857.firebaseio.com');
//     var ask = this;
//
//
//     ask = [];
//     $http.post(firebase);
//     .then(function(data) {
//
//       this.ask = {};
//     };
//   });
