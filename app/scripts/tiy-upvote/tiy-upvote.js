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
  var ref = new Firebase('https://intense-torch-7857.firebaseio.com');
  ref.authWithOAuthPopup('github', function(error, authData) {
    if (error) {
      console.log('Login Failed!', error);
    } else {
      console.log('Authenticated successfully with payload:', authData);
    }
  });


app.controller('ListController', function($http){
  var list = this;
  list.questions = [ ];

  $http.get('/api/questions.json')
    .then(function(response){
      console.log(response);
      list.questions = response.data;
    });


  });

})(window);
