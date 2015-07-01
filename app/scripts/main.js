(function() {
  'use strict';


  var app = angular.module('tiy-upvote', ['ngRoute', 'restangular' ]);

  app.config(function($routeProvider) {
    $routeProvider.when('/questions', {
      templateUrl: '../views/questions.html',
      controller: 'QuestionsController',
      controllerAs: 'questions'
    });
    $routeProvider.when('/answer', {
      templateUrl: '../views/answer.html',
      controller: 'AnswerController',
      controllerAs: 'answer'
    });
    $routeProvider.when('/ask', {
      templateUrl: '../views/ask.html',
      controller: 'AskController',
      controllerAs: 'ask'
    });
    $routeProvider.otherwise('/questions');
  });

  app.controller('QuestionsController')

// in case a MainController is needed
/*
  app.controller('MainController'function() {
    this.page = function(name) {
      this.view = 'views/404.html';
      if (name == 'home') {
        this.view = 'views/home.html';
      }
      if (name == 'answer') {
        this.view = 'views/answer.html';
      }
      if (name == 'ask') {
        this.view = 'views/ask.html';
      }
    }
    this.page('home');

  })
*/

})(window);
