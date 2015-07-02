(function() {


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

ListController //Need to connect the controller here
$.getJSON('/api/questions.json') //Need to connect to the api filders
  this.? //need to get curly braces replaced with info





})(window);
