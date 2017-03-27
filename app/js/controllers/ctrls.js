
angular.module('app.controllers',[])
.controller('MainCtrl', ['$scope','$http',function($scope,$http){

$scope.a = 'It works!!!';
$scope.search = 'Search';
$scope.channels = false;
$scope.isOnline = true;
$scope.channelData = [];
$scope.channelsList = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
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
    $scope.channelData.push(data);
    $scope.channels = true;
  }).error(function(data){
        $scope.channelError = data;
        $scope.channels = false;
  });
}
//$scope.getChannel('freecodecamp');
for (channel in $scope.channelsList){
  //alert($scope.channelsList[channel]);
  $scope.getChannel($scope.channelsList[channel]);
}


}])

;
