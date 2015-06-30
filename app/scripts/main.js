(function() {

  var app = angular.module('tiy-upvote', ['ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'views/home.html',
      controller: 'HomeController',
      controllerAs: 'home'

    });
    $routeProvider.when('/questions', {
      templateUrl: 'views/questions.html',
      controller: 'QuestionsController',
      controllerAs: 'questions'
    });
    $routeProvider.when('/ask-question', {
      templateUrl: 'views/ask-question.html',
      controller: 'AskController',
      controllerAs: 'ask'
    });
  });

  // incase a MainController is needed

  app.controller('MainController'function() {
    this.page = function(name) {
      this.view = 'views/404.html';
      if (name == 'home') {
        this.view = 'views/home.html';
      }
      if (name == 'questions') {
        this.view = 'views/questions.html';
      }
      if (name == 'ask') {
        this.view = 'views/ask-questions.html';
      }
    }
    this.page('home');

  })




})(window);
