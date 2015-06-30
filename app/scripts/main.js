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

  })




})(window);
