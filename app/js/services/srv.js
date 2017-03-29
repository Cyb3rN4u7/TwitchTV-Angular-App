
angular.module('app.services',[])
.factory('twitchApi', ['$http',function($http){
 var apiUrl = 'https://wind-bow.glitch.me/twitch-api/channels/';;


return{
  channel: function(searchTxt){
  return $http({
        method: 'GET',
        url: apiUrl + searchTxt,
        params: {
            format: 'json',
            json_callback: 'callback'
        }
    });
  }
};

}])
;
