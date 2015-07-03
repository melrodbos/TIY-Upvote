/* global: angular _ Firebase */

(function(){
angular.module('tiy-upvote')

.controller('ListController', function($http) {
  var list = this;
  list.questions = [];

  $http.get('/api/questions.json')
    .then(function(response) {
      console.log(response);
      list.questions = response.data;
    });



})
})();
