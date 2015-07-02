/*global angular Firebase*/
/*TODO: remind eslint about angular http://eslint.org/docs/rules/no-undef.html*/
(function() {
 'use strict';

  var app = angular.module('tiy-upvote', ['ngRoute', 'restangular' ]);

  app.config(function($routeProvider) {
    $routeProvider.when('/questions', {
      templateUrl: '/views/questions.html'
      // controller: 'QuestionsController',
      // controllerAs: 'questions'
    });
    $routeProvider.when('/answer', {
      templateUrl: '/views/answer.html'
      // controller: 'AnswerController',
      // controllerAs: 'answer'
    });
    $routeProvider.when('/ask', {
      templateUrl: '/views/ask.html'
      // controller: 'AskController',
      // controllerAs: 'ask'
    });
    $routeProvider.otherwise('/questions');
  });

  // start of firebase...
  .contoller('MainController', function($scope){
  var firebase = new Firebase('https://intense-torch-7857.firebaseio.com');

  var self = this;

  this.login = function(){
    firebase.authWithOAuthPopup('github', function(error, auth){
      
    })
  }
});

// $http.get('/api/questions.json')
//
// app.controller('ListController', function($http){
//   var self = this;
//   self.questions = []; //not sure if this is the right way to get things to populate?
//
// });


})(window);
