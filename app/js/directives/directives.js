angular.module('app.directives',[])
.directive('channelDetail',function(){
  return{
    type: 'E',
    templateUrl:'partials/channel.html'
  }
})
.directive('channelList',function(){
  return{
    type: 'E',
    templateUrl:'partials/channelList.html'
  }
})
;
