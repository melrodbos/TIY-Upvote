/* global angular */

(function(){
    'use strict';
angular.module('tiy-upvote')

.controller('ListController', function($http) {
  var list = this;
  list.questions = [];

  $http.get('/api/list/questions.json')
    .then(function(response) {
      console.log(response);
      list.questions = response.data;
    });



});
})();
