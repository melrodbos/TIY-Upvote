/*global angular Firebase*/
/*TODO: remind eslint about angular http://eslint.org/docs/rules/no-undef.html*/
(function() {
 'use strict';

  var app = angular.module('tiy-upvote', ['ngRoute', 'restangular' ]);
//Start of routes...
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

//Ask a question controller...
// $.ajax('https://glowing-inferno-3333.firebaseio.com/foo.json', {
//   method: ‘PUT'
// data: '[ … ]'
// }).then(tracer)

$.ajax('http://intense-torch-7857.firebaseio.com/answers.json', {
  method: 'GET'
  data: '[ ]'
}).then(tracer)



  app.controller('AskController', function($scope) {
    var firebase = new Firebase('http://intense-torch-7857.firebaseio.com');
    var ask = this;
  

    ask = [];
    $http.post(firebase);
    .then(function(data) {

      this.ask = {};
    };
  });

//List Controller...
app.controller('ListController', function($http){
  var list = this;
  list.questions = [ {
      "title": "Cheesecake jujubes candy canes toffee marzipan",
      "description": "Powder halvah bonbon apple pie chocolate cake soufflé. Ice cream pie icing tootsie roll chocolate bar sweet roll carrot cake candy canes. Halvah cotton candy croissant. Powder macaroon tart fruitcake tiramisu chupa chups.",
      "votes": 37,
      "views": 59,
      "author": "Lemon Drop",
      "author_url": "http://placekitten.com/100/100",
      "time": "May 3, 2015. 4:39am"
    },
    {
      "title": "Cheesecake jujubes candy canes toffee marzipan",
      "description": "Powder halvah bonbon apple pie chocolate cake soufflé. Ice cream pie icing tootsie roll chocolate bar sweet roll carrot cake candy canes. Halvah cotton candy croissant. Powder macaroon tart fruitcake tiramisu chupa chups.",
      "votes": 37,
      "views": 59,
      "author": "Lemon Drop",
      "author_url": "http://placekitten.com/100/100",
      "time": "May 3, 2015. 4:39am"
    },
    {
      "title": "Cheesecake jujubes candy canes toffee marzipan",
      "description": "Powder halvah bonbon apple pie chocolate cake soufflé. Ice cream pie icing tootsie roll chocolate bar sweet roll carrot cake candy canes. Halvah cotton candy croissant. Powder macaroon tart fruitcake tiramisu chupa chups.",
      "votes": 37,
      "views": 59,
      "author": "Lemon Drop",
      "author_url": "http://placekitten.com/100/100",
      "time": "May 3, 2015. 4:39am"
    },
   {
      "title": "Cheesecake jujubes candy canes toffee marzipan",
      "description": "Powder halvah bonbon apple pie chocolate cake soufflé. Ice cream pie icing tootsie roll chocolate bar sweet roll carrot cake candy canes. Halvah cotton candy croissant. Powder macaroon tart fruitcake tiramisu chupa chups.",
      "votes": 37,
      "views": 59,
      "author": "Lemon Drop",
      "author_url": "http://placekitten.com/100/100",
      "time": "May 3, 2015. 4:39am"
    },
];


  });

})(window);
