
angular.module('app.controllers',[])
.controller('MainCtrl', ['$scope','$http','twitchApi',function($scope,$http,twitchApi){

$scope.a = 'It works!!!';
$scope.search = 'Search';
$scope.channels = false;
$scope.searched = false;
$scope.isOnline = true;
$scope.channelData = [];
$scope.channelsList = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp","LeagueofLegends", "habathcx", "RobotCaleb", "noobs2ninjas"];
$scope.searchedList =[];
$scope.getChannels = function(searchTxt){
  twitchApi.channel(searchTxt).success(function (data){
    $scope.channelData.push(data);
    $scope.channels = true;
  }).error(function(data){
      $scope.channelData.unshift(data);
        $scope.channels = false;
  });
}


$scope.searchChannel = function(searchTxt){
  // an ugly way to go to top of page
//  scroll(0,0);
  twitchApi.channel(searchTxt).success(function (data){
    $scope.searchedChannelData = data ;
    $scope.searchedList.push(searchTxt);
    $scope.searched = true;
  }).error(function(data){
      alert(data.message);
      $scope.searchedChannelData = data;
  });
}

//Display featured channels from channelsList
for (channel in $scope.channelsList){
  //alert($scope.channelsList[channel]);
  $scope.getChannels($scope.channelsList[channel]);
}

}])

;
