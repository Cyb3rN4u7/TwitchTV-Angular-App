
angular.module('app.services',[])
.factory('twitchApi', ['$http',function($http){
var apiUrl = 'https://wind-bow.glitch.me/twitch-api';


return{
  channel: function(searchTxt){
  return  $http(apiUrl + '/channels/' + searchTxt ,{type:'GET'});
  }
};

}])
;
