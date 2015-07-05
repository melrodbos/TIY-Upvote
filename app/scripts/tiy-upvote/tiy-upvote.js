/*global angular */
/*TODO: remind eslint about angular http://eslint.org/docs/rules/no-undef.html*/
(function() {
    'use strict';

  angular.module('tiy-upvote', ['ngRoute', 'restangular'])
    .config(function($routeProvider) {
      $routeProvider.when('/questions', {
        templateUrl: 'views/questions.html'
        // controller: 'QuestionsController',
        // controllerAs: 'questions'
      });
      $routeProvider.when('/answer', {
        templateUrl: 'views/answer.html'
        // controller: 'AnswerController',
        // controllerAs: 'answer'
      });
      $routeProvider.when('/ask', {
        templateUrl: 'views/ask.html'
        // controller: 'AskController',
        // controllerAs: 'ask'
      });
      $routeProvider.when('/one-question', {
        templateUrl: 'views/one-question.html'
      });
      $routeProvider.otherwise('/404');
    }); // END config($routeProvider)
    // .config(function(RestangularProvider) {
    //
    // });
// Above function commented out -- for `eslint` build release 0.2.0 (it was an empty function and `eslint` wouldn't pass it)



})(window);
