/*global angular Firebase*/
/*TODO: remind eslint about angular http://eslint.org/docs/rules/no-undef.html*/
(function() {
  angular.module('tiy-upvote', ['ngRoute', 'restangular' ])
    .config(function($routeProvider) {
      $routeProvider.when('/questions', {
        templateUrl: 'views/questions.html',
        // controller: 'QuestionsController',
        // controllerAs: 'questions'
      });
      $routeProvider.when('/answer', {
        templateUrl: '../views/answer.html',
        // controller: 'AnswerController',
        // controllerAs: 'answer'
      });
      $routeProvider.when('/ask', {
        templateUrl: '../views/ask.html',
        // controller: 'AskController',
        // controllerAs: 'ask'
      });
      $routeProvider.otherwise('/questions');
    }) // END config($routeProvider)
    .config(function(RestangularProvider){

    })
    // .controller('MainController', function($scope){
    //   var firebase = new Firebase('https://glowing-inferno-3596.firebaseio.com');
    //
    //   var self = this;
    //
    //   this.login = function(){
    //     firebase.authWithOAuthPopup('github', function(error, auth){
    //       $scope.$apply(function(){
    //
    //       });
    //     });
    //   } // END login
    // }) ;



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
