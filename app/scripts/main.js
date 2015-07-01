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

  myUpvote.controller('')



})(window);
