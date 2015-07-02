(function() {


  var app = angular.module('tiy-upvote', ['ngRoute', 'restangular' ]);

  app.config(function($rthiouteProvider) {
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


$http.get('/api/questions.json')

app.controller('ListController', function($http){
  var self = this;
  self.questions = []; //not sure if this is the right way to get things to populate?

});



})(window);
