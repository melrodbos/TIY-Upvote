(function(){
angular.module('tiy-upvote')

.controller('MainController', function($scope){
  var firebase = new Firebase('https://intense-torch-7857.firebaseio.com');

  var self = this;

  this.login = function(){
    firebase.authWithOAuthPopup('github', function(error, auth){
      $scope.$apply(function(){

        console.log('Its alive!')

      });
    });
  }


})
})();
