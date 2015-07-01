(function() {


  var app = angular.module('tiy-upvote', ['ngRoute', 'restangular' ]);

  app.config(function($routeProvider) {
    $routeProvider.when('../views/questions.html', {
      templateUrl: '../views/questions.html',
      controller: 'QuestionsController',
      controllerAs: 'questions'

    });
    $routeProvider.when('/answer', {
      templateUrl: '../views/answer.html',
      controller: 'AnswerController',
      controllerAs: 'answer'
    });
    $routeProvider.when('/ask-question', {
      templateUrl: '../views/ask.html',
      controller: 'AskController',
      controllerAs: 'ask'
    });
  });

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
