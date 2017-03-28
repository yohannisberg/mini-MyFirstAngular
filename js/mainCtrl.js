angular.module('friendsList').controller('mainCtrl', function($scope){

  $scope.friends=["James", "Curtis", "Ryan", "Alex"];

  function addFriend(anotherFriend){
    $scope.friends.push(anotherFriend);
  }

});
