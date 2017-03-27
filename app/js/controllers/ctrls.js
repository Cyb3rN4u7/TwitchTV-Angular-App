
angular.module('app.controllers',[])
.controller('MainCtrl', ['$scope','$http',function($scope,$http){

$scope.a = 'It works!!!';
$scope.search = 'Search';
$scope.channels = false;
$scope.channelData = [];

$scope.getChannel = function(searchTxt){
  var apiUrl = 'http://wind-bow.glitch.me/twitch-api/channels/';
  $http({
        method: 'GET',
        url: apiUrl + searchTxt,
        params: {
            format: 'json',
            json_callback: 'callback'
        }
    }).success(function (data){
    $scope.channelData = data;
    $scope.channels = true;
  }).error(function(data){
        $scope.channelError = data;
        $scope.channels = false;
  });
}
}])

;
