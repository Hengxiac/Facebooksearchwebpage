window.fbAsyncInit = function() {
  FB.init({
    appId      : '205324263299489',
    xfbml      : true,
    version    : 'v2.8'
  });
  FB.AppEvents.logPageView();
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  location.latitude = crd.latitude;
  location.longitude = crd.longitude;
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

$(document).ready(function(){
$('#usertab').mousedown(function(){
  if($(this).attr('class') == 'search-nav')
  {
       $(this).attr("class",'search-na');
       $('#pagetab').attr("class",'search-nav');
       $('#eventtab').attr("class",'search-nav');
       $('#placetab').attr("class",'search-nav');
       $('#grouptab').attr("class",'search-nav');
       $('#favoritetab').attr("class",'search-nav');

       $('#user').attr("class","tab-pane fade in active");
       $('#page').attr("class","tab-pane fade");
       $('#event').attr("class","tab-pane fade");
       $('#place').attr("class","tab-pane fade");
       $('#group').attr("class","tab-pane fade");
       $('#favorite').attr("class","tab-pane fade");
  }
});

$('#pagetab').mousedown(function(){
  if($(this).attr('class') == 'search-nav')
  {
       $(this).attr("class",'search-na');
       $('#usertab').attr("class",'search-nav');
       $('#eventtab').attr("class",'search-nav');
       $('#placetab').attr("class",'search-nav');
       $('#grouptab').attr("class",'search-nav');
       $('#favoritetab').attr("class",'search-nav');

       $('#user').attr("class","tab-pane fade");
       $('#page').attr("class","tab-pane fade in active");
       $('#event').attr("class","tab-pane fade");
       $('#place').attr("class","tab-pane fade");
       $('#group').attr("class","tab-pane fade");
       $('#favorite').attr("class","tab-pane fade");
  }
});
$('#eventtab').mousedown(function(){
  if($(this).attr('class') == 'search-nav')
  {
       $(this).attr('class','search-na');
       $('#usertab').attr('class','search-nav');
       $('#pagetab').attr('class','search-nav');
       $('#placetab').attr('class','search-nav');
       $('#grouptab').attr('class','search-nav');
       $('#favoritetab').attr('class','search-nav');

       $('#user').attr("class","tab-pane fade");
       $('#page').attr("class","tab-pane fade");
       $('#event').attr("class","tab-pane fade in active");
       $('#place').attr("class","tab-pane fade");
       $('#group').attr("class","tab-pane fade");
       $('#favorite').attr("class","tab-pane fade");
  }
});
$('#placetab').mousedown(function(){
  if($(this).attr('class') == 'search-nav')
  {

       $(this).attr("class",'search-na');
       $('#usertab').attr("class",'search-nav');
       $('#eventtab').attr("class",'search-nav');
       $('#pagetab').attr("class",'search-nav');
       $('#grouptab').attr("class",'search-nav');
       $('#favoritetab').attr("class",'search-nav');

       $('#user').attr("class","tab-pane fade");
       $('#page').attr("class","tab-pane fade");
       $('#event').attr("class","tab-pane fade");
       $('#place').attr("class","tab-pane fade in active");
       $('#group').attr("class","tab-pane fade");
       $('#favorite').attr("class","tab-pane fade");
  }
});
$('#grouptab').mousedown(function(){
  if($(this).attr('class') == 'search-nav')
  {

       $(this).attr("class",'search-na');
       $('#usertab').attr("class",'search-nav');
       $('#eventtab').attr("class",'search-nav');
       $('#placetab').attr("class",'search-nav');
       $('#pagetab').attr("class",'search-nav');
       $('#favoritetab').attr("class",'search-nav');

       $('#user').attr("class","tab-pane fade");
       $('#page').attr("class","tab-pane fade");
       $('#event').attr("class","tab-pane fade");
       $('#place').attr("class","tab-pane fade");
       $('#group').attr("class","tab-pane fade in active");
       $('#favorite').attr("class","tab-pane fade");
  }
});
$('#favoritetab').mousedown(function(){
  if($(this).attr('class') == 'search-nav')
  {
       $(this).attr("class",'search-na');
       $('#usertab').attr("class",'search-nav');
       $('#eventtab').attr("class",'search-nav');
       $('#placetab').attr("class",'search-nav');
       $('#grouptab').attr("class",'search-nav');
       $('#pagetab').attr("class",'search-nav');

       $('#user').attr("class","tab-pane fade");
       $('#page').attr("class","tab-pane fade");
       $('#event').attr("class","tab-pane fade");
       $('#place').attr("class","tab-pane fade");
       $('#group').attr("class","tab-pane fade");
       $('#favorite').attr("class","tab-pane fade in active");
  }
});
$('#clear').mousedown(function(){

       $('#page').attr("class",'search-nav');
       $('#usertab').attr("class",'search-nav');
       $('#eventtab').attr("class",'search-nav');
       $('#placetab').attr("class",'search-nav');
       $('#grouptab').attr("class",'search-nav');
       $('#pagetab').attr("class",'search-nav');

       $('#user').attr("class","tab-pane fade");
       $('#page').attr("class","tab-pane fade");
       $('#event').attr("class","tab-pane fade");
       $('#place').attr("class","tab-pane fade");
       $('#group').attr("class","tab-pane fade");
       $('#favorite').attr("class","tab-pane fade");

});
});
var app = angular.module('myApp', []);
app.controller('findresult',function($scope,$http){
  $scope.hasalbums = true;
  $scope.hasposts  = true;

  $scope.showtable = true;
  $scope.isprocessing = false;
  $scope.isprocessingdetail = false;
  $scope.info = {"name":"","profile":"","id":'',"type":''};
  $scope.favorite = new Object();
  $scope.favorite.user  = new Array();
  $scope.favorite.page  = new Array();
  $scope.favorite.event = new Array();
  $scope.favorite.place = new Array();
  $scope.favorite.group = new Array();

  $scope.favoriteList   = new Array();
  var str;
  var typeindex;
  var urlindex;
  var idindex;
  if (typeof(Storage) !== "undefined") {
    //localStorage.clear();
    for(var i = 0,len = localStorage.length;i<=len-1;i++)
    {
        $scope.favoriteList[i] = new Object();
        $scope.favoriteList[i].id =  localStorage.key(i);
        str  = localStorage.getItem(localStorage.key(i));
        typeindex = str.indexOf("&type=");
        urlindex = str.indexOf("&url=");
        nameindex  = str.indexOf("&name=");
        $scope.favoriteList[i].type = str.substring(typeindex+6,urlindex);
        $scope.favoriteList[i].url  = str.substring(urlindex+5,nameindex);
        $scope.favoriteList[i].name   = str.substring(nameindex+6);
    }
  }
  $scope.posts = new Array();
  $scope.albums = new Array();

  $scope.users  = new Object();
  $scope.pages  = new Object();
  $scope.events = new Object();
  $scope.places = new Object();
  $scope.groups = new Object();
  $scope.users['prev']  = new Array(); $scope.users['current']  = new Array(); $scope.users['next']  = new Array();
  $scope.pages['prev']  = new Array(); $scope.pages['current']  = new Array(); $scope.pages['next']  = new Array();
  $scope.events['prev'] = new Array(); $scope.events['current'] = new Array(); $scope.events['next'] = new Array();
  $scope.places['prev'] = new Array(); $scope.places['current'] = new Array(); $scope.places['next'] = new Array();
  $scope.groups['prev'] = new Array(); $scope.groups['current'] = new Array(); $scope.groups['next'] = new Array();
  $scope.currentPage = {"user":1,"page":1,"event":1,"place":1,"group":1};
  $scope.hasNext = {"user":false,"page":false,"event":false,"place":false,"group":false};
  $scope.hasPrev = {"user":false,"page":false,"event":false,"place":false,"group":false};
  $scope.paging = new Object();
  $scope.paging.user = new Object();$scope.paging.page = new Object();$scope.paging.event = new Object();$scope.paging.place = new Object();$scope.paging.group = new Object();
  $scope.paging.user['prev']    = new Object();$scope.paging.page['prev']    = new Object();$scope.paging.event['prev']    = new Object();$scope.paging.place['prev']    = new Object();$scope.paging.group['prev']    = new Object();
  $scope.paging.user['current'] = new Object();$scope.paging.page['current'] = new Object();$scope.paging.event['current'] = new Object();$scope.paging.place['current'] = new Object();$scope.paging.group['current'] = new Object();
  $scope.paging.user['next']    = new Object();$scope.paging.page['next']    = new Object();$scope.paging.event['next']    = new Object();$scope.paging.place['next']    = new Object();$scope.paging.group['next']    = new Object();
  for(var i =0;i<25;i++)
  {

      $scope.favorite.user[i]  = 'glyphicon glyphicon-star-empty';
      $scope.favorite.page[i]  = 'glyphicon glyphicon-star-empty';
      $scope.favorite.event[i] = 'glyphicon glyphicon-star-empty';
      $scope.favorite.place[i] = 'glyphicon glyphicon-star-empty';
      $scope.favorite.group[i] = 'glyphicon glyphicon-star-empty';

  }

  $scope.detailfav = "glyphicon glyphicon-star-empty";

  $scope.keyin ={'val':""};
  $scope.submitsearch = function(){
    if(typeof($scope.keyin.val) == 'undefined' || $scope.keyin.val =='')
       alert('This field should not be left blank!');
    else {

	  $scope.users['prev'] = $scope.users['current'] =$scope.users['next'] = null;
      $scope.pages['prev'] = $scope.pages['current'] =$scope.pages['next'] = null;
      $scope.events['prev'] = $scope.events['current'] =$scope.events['next'] = null;
      $scope.places['prev'] = $scope.places['current'] =$scope.places['next'] = null;
      $scope.groups['prev'] = $scope.groups['current'] =$scope.groups['next'] = null;

      $scope.currentPage.user = $scope.currentPage.page = $scope.currentPage.event = $scope.currentPage.place = $scope.currentPage.group = 1;
      $scope.hasNext.user = $scope.hasNext.page = $scope.hasNext.event = $scope.hasNext.place = $scope.hasNext.group= false;
      $scope.hasPrev.user=$scope.hasPrev.page=$scope.hasPrev.event=$scope.hasPrev.place=$scope.hasPrev.group = false;

      $scope.paging.user['prev'] = $scope.paging.user['current'] =$scope.paging.user['next'] = null;
      $scope.paging.page['prev'] = $scope.paging.page['current'] =$scope.paging.page['next'] = null;
      $scope.paging.event['prev'] = $scope.paging.event['current'] =$scope.paging.event['next'] = null;
      $scope.paging.place['prev'] = $scope.paging.place['current'] =$scope.paging.place['next'] = null;
      $scope.paging.group['prev'] = $scope.paging.group['current'] =$scope.paging.group['next'] = null;

      $scope.isprocessing = true;
      var keyword = $scope.keyin.val;

      $scope.currentPage = {"user":1,"page":1,"event":1,"place":1,"group":1};
      $scope.hasNext = {"user":false,"page":false,"event":false,"place":false,"group":false};
      $scope.hasPrev = {"user":false,"page":false,"event":false,"place":false,"group":false};
      for(var i =0;i<25;i++)
      {

          $scope.favorite.user[i]  = 'glyphicon glyphicon-star-empty';
          $scope.favorite.page[i]  = 'glyphicon glyphicon-star-empty';
          $scope.favorite.event[i] = 'glyphicon glyphicon-star-empty';
          $scope.favorite.place[i] = 'glyphicon glyphicon-star-empty';
          $scope.favorite.group[i] = 'glyphicon glyphicon-star-empty';

      }
      navigator.geolocation.getCurrentPosition(success,error,options);
      /****************************************************\
      /*for debug in chrome, chrome does not support insecure getCurrentPosition*\
      */

      console.log('location=(' + location.longitude +' , '+ location.latitude +')');

        $http({
                method: 'GET',
                url: '../HW8.php',
                params: {'keyword': keyword,'Latitude':location.latitude,'Longitude':location.longitude},
                //responseType:'json'
         }).then(function successCallback(response) {
             console.log("Successfully get response from backend!");
             console.log(response);
             $scope.users ['current'] = response.data.user.data;
             $scope.pages ['current'] = response.data.page.data;
             $scope.events['current'] = response.data.event.data;
             $scope.places['current'] = response.data.place.data;
             $scope.groups['current'] = response.data.group.data;
             angular.element("#user").removeClass('tab-pane fade');
             angular.element("#user").addClass("tab-pane fade in active");
             angular.element("#page").removeClass('in active');
             angular.element("#event").removeClass('in active');
             angular.element("#place").removeClass('in active');
             angular.element("#group").removeClass('in active');
             angular.element("#favorite").removeClass('in active');

             angular.element("#usertab").removeClass('search-nav');
             angular.element("#usertab").addClass("search-na");
             angular.element("#pagetab").removeClass();
             angular.element("#pagetab").addClass('search-nav');
             angular.element("#eventtab").removeClass();
             angular.element("#eventtab").addClass('search-nav');
             angular.element("#placetab").removeClass();
             angular.element("#placetab").addClass('search-nav');
             angular.element("#grouptab").removeClass();
             angular.element("#grouptab").addClass('search-nav');
             angular.element("#favoritetab").removeClass();
             angular.element("#favoritetab").addClass('search-nav');


             $scope.paging.user['current'] = response.data.user.paging;
             if(typeof(response.data.user.paging)!="undefined" && typeof(response.data.user.paging.next)!="undefined")
             {
                  $scope.hasNext.user = true;
                  $scope.hasPrev.user = false;
				  var tempurl = response.data.user.paging.next;

                  $http({
                          method: 'GET',
                          url: tempurl,
                   }).then(function successCallback(response) {
                       console.log(response);

                       $scope.users ['next'] = response.data.data;
                       $scope.paging.user['next'] = response.data.paging;
                   }, function errorCallback(response) {
                       console.log("Fail to get http response from url!");
                   });
             }
             else {
               $scope.hasNext.user = false;
               $scope.hasPrev.user = false;
             }
             $scope.isprocessing = false;
             $scope.paging.page['current'] = response.data.page.paging;
             if(typeof(response.data.page.paging)!="undefined" && typeof(response.data.page.paging.next)!="undefined")
             {
                  $scope.hasNext.page = true;
                  $scope.hasPrev.page = false;
                  var tempurl = response.data.page.paging.next;
                  $http({
                          method: 'GET',
                          url: tempurl,
                   }).then(function successCallback(response) {
                       console.log(response);

                       $scope.pages ['next'] = response.data.data;
                       $scope.paging.page['next'] = response.data.paging;
                   }, function errorCallback(response) {
                       console.log("Fail to get http response from url!");
                   });
             }
             else {
               $scope.hasNext.page = false;
               $scope.hasPrev.page = false;
             }
             $scope.paging.event['current'] = response.data.event.paging;
             if(typeof(response.data.event.paging)!="undefined" && typeof(response.data.event.paging.next)!="undefined")
             {
                  $scope.hasNext.event = true;
                  $scope.hasPrev.event = false;
                  var tempurl = response.data.event.paging.next;
                  $http({
                          method: 'GET',
                          url: tempurl,
                   }).then(function successCallback(response) {
                       console.log(response);
                       $scope.events ['next'] = response.data.data;
                       $scope.paging.event['next'] = response.data.paging;
                   }, function errorCallback(response) {
                       console.log("Fail to get http response from url!");
                   });
             }
             else {
               $scope.hasNext.event = false;
               $scope.hasPrev.event = false;
             }
             $scope.paging.place['current'] = response.data.place.paging;
             if(typeof(response.data.place.paging)!="undefined" && typeof(response.data.place.paging.next)!="undefined")
             {
                  $scope.hasNext.place = true;
                  $scope.hasPrev.place = false;
                  var tempurl = response.data.place.paging.next;
                  $http({
                          method: 'GET',
                          url: tempurl,
                   }).then(function successCallback(response) {
                       console.log(response);
                       $scope.places ['next'] = response.data.data;
                       $scope.paging.place['next'] = response.data.paging;
                   }, function errorCallback(response) {
                       console.log("Fail to get http response from url!");
                   });
             }
             else {
               $scope.hasNext.place = false;
               $scope.hasPrev.place = false;
             }
             $scope.paging.group['current'] = response.data.group.paging;
             if(typeof(response.data.group.paging)!="undefined" && typeof(response.data.group.paging.next)!="undefined")
             {
                  $scope.hasNext.group = true;
                  $scope.hasPrev.group = false;
                  var tempurl = response.data.group.paging.next;
                  $http({
                          method: 'GET',
                          url: tempurl,
                   }).then(function successCallback(response) {
                       console.log(response);
                       $scope.groups ['next'] = response.data.data;
                       $scope.paging.group['next'] = response.data.paging;
                   }, function errorCallback(response) {
                       console.log("Fail to get http response from url!");
                   });
             }
             else {
               $scope.hasNext.group = false;
               $scope.hasPrev.group = false;
             }
             for(var i = 0,len = $scope.users['current'].length;i<len;i++)
             {
               if(typeof(Storage)){
                 var temp = localStorage.getItem($scope.users['current'][i].id);
                 if(temp !=null)
                    $scope.favorite.user[i] = 'glyphicon glyphicon-star';
               }
             }
             for(var i = 0,len = $scope.pages['current'].length;i<len;i++)
             {
               if(typeof(Storage)){
                 var temp = localStorage.getItem($scope.pages['current'][i].id);
                 if(temp !=null)
                    $scope.favorite.page[i] = 'glyphicon glyphicon-star';
               }
             }
             for(var i = 0,len = $scope.events['current'].length;i<len;i++)
             {
               if(typeof(Storage)){
                 var temp = localStorage.getItem($scope.events['current'][i].id);
                 if(temp!=null)
                    $scope.favorite.event[i] = 'glyphicon glyphicon-star';
               }
             }
             for(var i = 0,len = $scope.places['current'].length;i<len;i++)
             {
               if(typeof(Storage)){
                 var temp = localStorage.getItem($scope.places['current'][i].id);
                 if(temp !=null)
                    $scope.favorite.place[i] = 'glyphicon glyphicon-star';
               }
             }
             for(var i = 0,len = $scope.groups['current'].length;i<len;i++)
             {
               if(typeof(Storage)){
                 var temp = localStorage.getItem($scope.groups['current'][i].id);
                 if(temp !=null)
                    $scope.favorite.group[i] = 'glyphicon glyphicon-star';
               }
             }

         }, function errorCallback(response) {
             console.log("Fail to get http response from backend!");
         });
    }
  };

  $scope.markfavorite = function(type,id){

      switch(type)
      {
        case 'user':
        if($scope.favorite.user[id-1] == 'glyphicon glyphicon-star-empty')
          {
            $scope.favorite.user[id-1] = 'glyphicon glyphicon-star';
            // Check browser support
            if (typeof(Storage) !== "undefined") {
            // Store
            var temp = localStorage.getItem($scope.users['current'][id-1].id);
            if(temp ==null)
             {
               localStorage.setItem($scope.users['current'][id-1].id,"&type=user&url="+$scope.users['current'][id-1].picture.data.url+"&name="+$scope.users['current'][id-1].name);

               var newlist = $scope.favoriteList.length;
               $scope.favoriteList[newlist] = new Object();
               $scope.favoriteList[newlist].type = "user";
               $scope.favoriteList[newlist].name = $scope.users['current'][id-1].name;
               $scope.favoriteList[newlist].url  = $scope.users['current'][id-1].picture.data.url;
               $scope.favoriteList[newlist].id   = $scope.users['current'][id-1].id;
             }
             }
          }
        else {
          $scope.favorite.user[id-1] = 'glyphicon glyphicon-star-empty';
          if (typeof(Storage) !== "undefined") {
          var temp = localStorage.getItem($scope.users['current'][id-1].id);
          if(temp !=null)
          {
            localStorage.removeItem($scope.users['current'][id-1].id);
            $scope.favoriteList = new Array();
            for(var i = 0,len = localStorage.length;i<=len-1;i++)
            {
                $scope.favoriteList[i] = new Object();
                $scope.favoriteList[i].id =  localStorage.key(i);
                str  = localStorage.getItem(localStorage.key(i));
                typeindex = str.indexOf("&type=");
                urlindex = str.indexOf("&url=");
                nameindex  = str.indexOf("&name=");
                $scope.favoriteList[i].type = str.substring(typeindex+6,urlindex);
                $scope.favoriteList[i].url  = str.substring(urlindex+5,nameindex);
                $scope.favoriteList[i].name   = str.substring(nameindex+6);
            }
          }

           }
        }
        break;
        case 'page':
        if($scope.favorite.page[id-1] == 'glyphicon glyphicon-star-empty')
          {
            $scope.favorite.page[id-1] = 'glyphicon glyphicon-star';
            if (typeof(Storage) !== "undefined") {
            // Store
            var temp = localStorage.getItem($scope.pages['current'][id-1].id);
            if(temp ==null){
               localStorage.setItem($scope.pages['current'][id-1].id,"&type=page&url="+$scope.pages['current'][id-1].picture.data.url+"&name="+$scope.pages['current'][id-1].name);

                var newlist = $scope.favoriteList.length;
                $scope.favoriteList[newlist] = new Object();
                $scope.favoriteList[newlist].type = "page";
                $scope.favoriteList[newlist].name = $scope.pages['current'][id-1].name;
                $scope.favoriteList[newlist].url  = $scope.pages['current'][id-1].picture.data.url;
                $scope.favoriteList[newlist].id   = $scope.pages['current'][id-1].id;
              }
             }
          }
        else {
          $scope.favorite.page[id-1] = 'glyphicon glyphicon-star-empty';
          if (typeof(Storage) !== "undefined") {
          var temp = localStorage.getItem($scope.pages['current'][id-1].id);
          if(temp!=null)
          {
               localStorage.removeItem($scope.pages['current'][id-1].id);
               $scope.favoriteList = new Array();
               for(var i = 0,len = localStorage.length;i<=len-1;i++)
               {
                   $scope.favoriteList[i] = new Object();
                   $scope.favoriteList[i].id =  localStorage.key(i);
                   str  = localStorage.getItem(localStorage.key(i));
                   typeindex = str.indexOf("&type=");
                   urlindex = str.indexOf("&url=");
                   nameindex  = str.indexOf("&name=");
                   $scope.favoriteList[i].type = str.substring(typeindex+6,urlindex);
                   $scope.favoriteList[i].url  = str.substring(urlindex+5,nameindex);
                   $scope.favoriteList[i].name   = str.substring(nameindex+6);
               }
          }
          }
        }
        break;
        case 'event':
        if($scope.favorite.event[id-1] == 'glyphicon glyphicon-star-empty')
          {
            $scope.favorite.event[id-1] = 'glyphicon glyphicon-star';
            if (typeof(Storage) !== "undefined") {
            // Store
            var temp = localStorage.getItem($scope.events['current'][id-1].id);
            if(temp ==null){
               localStorage.setItem($scope.events['current'][id-1].id,"&type=event&url="+$scope.events['current'][id-1].picture.data.url+"&name="+$scope.events['current'][id-1].name);

               var newlist = $scope.favoriteList.length;
               $scope.favoriteList[newlist] = new Object();
               $scope.favoriteList[newlist].type = "event";
               $scope.favoriteList[newlist].name = $scope.pages['current'][id-1].name;
               $scope.favoriteList[newlist].url  = $scope.pages['current'][id-1].picture.data.url;
               $scope.favoriteList[newlist].id   = $scope.pages['current'][id-1].id;
             }
             }
          }
        else {
          $scope.favorite.event[id-1] = 'glyphicon glyphicon-star-empty';
          if (typeof(Storage) !== "undefined") {
          var temp = localStorage.getItem($scope.events['current'][id-1].id);
          if(temp!=null)
             {
               localStorage.removeItem($scope.events['current'][id-1].id);
               $scope.favoriteList = new Array();
               for(var i = 0,len = localStorage.length;i<=len-1;i++)
               {
                   $scope.favoriteList[i] = new Object();
                   $scope.favoriteList[i].id =  localStorage.key(i);
                   str  = localStorage.getItem(localStorage.key(i));
                   typeindex = str.indexOf("&type=");
                   urlindex = str.indexOf("&url=");
                   nameindex  = str.indexOf("&name=");
                   $scope.favoriteList[i].type = str.substring(typeindex+6,urlindex);
                   $scope.favoriteList[i].url  = str.substring(urlindex+5,nameindex);
                   $scope.favoriteList[i].name   = str.substring(nameindex+6);
               }
             }
           }
        }
        break;
        case 'place':
        if($scope.favorite.place[id-1] == 'glyphicon glyphicon-star-empty')
          {
            $scope.favorite.place[id-1] = 'glyphicon glyphicon-star';
            if (typeof(Storage) !== "undefined") {
            // Store
            var temp = localStorage.getItem($scope.places['current'][id-1].id);
            if(temp ==null){
               localStorage.setItem($scope.places['current'][id-1].id,"&type=place&url="+$scope.places['current'][id-1].picture.data.url+"&name="+$scope.places['current'][id-1].name);

                var newlist = $scope.favoriteList.length;
                $scope.favoriteList[newlist] = new Object();
                $scope.favoriteList[newlist].type = "place";
                $scope.favoriteList[newlist].name = $scope.places['current'][id-1].name;
                $scope.favoriteList[newlist].url  = $scope.places['current'][id-1].picture.data.url;
                $scope.favoriteList[newlist].id   = $scope.places['current'][id-1].id;
              }
             }
          }
        else {
          $scope.favorite.place[id-1] = 'glyphicon glyphicon-star-empty';
          if (typeof(Storage) !== "undefined") {
          var temp = localStorage.getItem($scope.places['current'][id-1].id);
          if(temp!=null)
          {
               localStorage.removeItem($scope.places['current'][id-1].id);
               $scope.favoriteList = new Array();
               for(var i = 0,len = localStorage.length;i<=len-1;i++)
               {
                   $scope.favoriteList[i] = new Object();
                   $scope.favoriteList[i].id =  localStorage.key(i);
                   str  = localStorage.getItem(localStorage.key(i));
                   typeindex = str.indexOf("&type=");
                   urlindex = str.indexOf("&url=");
                   nameindex  = str.indexOf("&name=");
                   $scope.favoriteList[i].type = str.substring(typeindex+6,urlindex);
                   $scope.favoriteList[i].url  = str.substring(urlindex+5,nameindex);
                   $scope.favoriteList[i].name   = str.substring(nameindex+6);
               }
          }
          }
        }
        break;
        case 'group':
        if($scope.favorite.group[id-1] == 'glyphicon glyphicon-star-empty')
          {
            $scope.favorite.group[id-1] = 'glyphicon glyphicon-star';
            if (typeof(Storage) !== "undefined") {
            // Store
            var temp = localStorage.getItem($scope.groups['current'][id-1].id);
            if(temp ==null){
               localStorage.setItem($scope.groups['current'][id-1].id,"&type=group&url="+$scope.groups['current'][id-1].picture.data.url+"&name="+$scope.groups['current'][id-1].name);

                var newlist = $scope.favoriteList.length;
                $scope.favoriteList[newlist] = new Object();
                $scope.favoriteList[newlist].type = "group";
                $scope.favoriteList[newlist].name = $scope.groups['current'][id-1].name;
                $scope.favoriteList[newlist].url  = $scope.groups['current'][id-1].picture.data.url;
                $scope.favoriteList[newlist].id   = $scope.groups['current'][id-1].id;
              }
             }
          }
        else {
          $scope.favorite.group[id-1] = 'glyphicon glyphicon-star-empty';
          if (typeof(Storage) !== "undefined") {
          var temp = localStorage.getItem($scope.groups['current'][id-1].id);
          if(temp!=null)
          {
               localStorage.removeItem($scope.groups['current'][id-1].id);
               $scope.favoriteList = new Array();
               for(var i = 0,len = localStorage.length;i<=len-1;i++)
               {
                   $scope.favoriteList[i] = new Object();
                   $scope.favoriteList[i].id =  localStorage.key(i);
                   str  = localStorage.getItem(localStorage.key(i));
                   typeindex = str.indexOf("&type=");
                   urlindex = str.indexOf("&url=");
                   nameindex  = str.indexOf("&name=");
                   $scope.favoriteList[i].type = str.substring(typeindex+6,urlindex);
                   $scope.favoriteList[i].url  = str.substring(urlindex+5,nameindex);
                   $scope.favoriteList[i].name   = str.substring(nameindex+6);
               }
          }
          }
        }
        break;
        default:
        break;
      }

  };

  $scope.gotoprev = function(type){
    switch(type)
    {
      case 'user':
      if($scope.hasPrev.user)
      {
        $scope.users ['next']    = $scope.users ['current'];
        $scope.users ['current'] = $scope.users ['prev'];

        $scope.paging.user['next'] = $scope.paging.user['current'];
        $scope.paging.user['current'] = $scope.paging.user['prev'];

        $scope.hasNext.user = true;
		var tempurl = $scope.paging.user['current'].previous;
        $http({
                method: 'GET',
                url: tempurl,
         }).then(function successCallback(response) {
             console.log(response);
             $scope.users ['prev'] = response.data.data;
             if(typeof(response.data.paging) !='undefined')
             {
                  $scope.paging.user['prev'] = response.data.paging;
                  if(typeof(response.data.paging.next)!='undefined')
                  {
                       $scope.hasPrev.user = true;
                  }
                  else {
                       $scope.hasPrev.user = false;
                  }
             }
             else {
               $scope.hasPrev.user = false;
               $scope.paging.user['prev'] = null;
             }

         }, function errorCallback(response) {
             console.log("Fail to get http response from url!-previous-user");
             $scope.hasPrev.user = false;
         });
         $scope.currentPage.user --;
         for(var i =0;i<25;i++)
         {
             $scope.favorite.user[i]  = 'glyphicon glyphicon-star-empty';
         }
         for(var i = 0,len = $scope.users['current'].length;i<len;i++)
         {
           if(typeof(Storage)){
             var temp = localStorage.getItem($scope.users['current'][i].id);
             if(temp !=null)
                $scope.favorite.user[i] = 'glyphicon glyphicon-star';
           }
         }
      }
      break;
      case 'page':
      if($scope.hasPrev.page)
      {
        $scope.pages ['next']    = $scope.pages ['current'];
        $scope.pages ['current'] = $scope.pages ['prev'];

        $scope.paging.page['next'] = $scope.paging.page['current'];
        $scope.paging.page['current'] = $scope.paging.page['prev'];

        $scope.hasNext.page = true;
	    var tempurl = $scope.paging.page['current'].previous;
        $http({
                method: 'GET',
                url: tempurl,
         }).then(function successCallback(response) {
             console.log(response);
             $scope.pages ['prev'] = response.data.data;
             if(typeof(response.data.paging) !='undefined')
             {
                  $scope.paging.page['prev'] = response.data.paging;
                  if(typeof(response.data.paging.next)!='undefined')
                  {
                       $scope.hasPrev.page = true;
                  }
                  else {
                       $scope.hasPrev.page = false;
                  }
             }
             else {
               $scope.hasPrev.page = false;
               $scope.paging.page['prev'] = null;
             }

         }, function errorCallback(response) {
             console.log("Fail to get http response from url!-previous-page");
             $scope.hasPrev.page = false;
         });
         $scope.currentPage.page --;
         for(var i =0;i<25;i++)
         {
             $scope.favorite.page[i]  = 'glyphicon glyphicon-star-empty';
         }
         for(var i = 0,len = $scope.pages['current'].length;i<len;i++)
         {
           if(typeof(Storage)){
             var temp = localStorage.getItem($scope.pages['current'][i].id);
             if(temp !=null)
                $scope.favorite.page[i] = 'glyphicon glyphicon-star';
           }
         }
      }
      break;
      case 'event':
      if($scope.hasPrev.event)
      {
        $scope.events ['next']    = $scope.events ['current'];
        $scope.events ['current'] = $scope.events ['prev'];

        $scope.paging.event['next'] = $scope.paging.event['current'];
        $scope.paging.event['current'] = $scope.paging.event['prev'];

        $scope.hasNext.event = true;
		var tempurl = $scope.paging.event['current'].previous;
        $http({
                method: 'GET',
                url: tempurl,
         }).then(function successCallback(response) {
             console.log(response);
             $scope.events ['prev'] = response.data.data;
             if(typeof(response.data.paging) !='undefined')
             {
                  $scope.paging.event['prev'] = response.data.paging;
                  if(typeof(response.data.paging.next)!='undefined')
                  {
                       $scope.hasPrev.event = true;
                  }
                  else {
                       $scope.hasPrev.event = false;
                  }
             }
             else {
               $scope.hasPrev.event = false;
               $scope.paging.event['prev'] = null;
             }

         }, function errorCallback(response) {
             console.log("Fail to get http response from url!-previous-event");
             $scope.hasPrev.event = false;
         });
         $scope.currentPage.event --;
         for(var i =0;i<25;i++)
         {
             $scope.favorite.event[i] = 'glyphicon glyphicon-star-empty';
         }
         for(var i = 0,len = $scope.events['current'].length;i<len;i++)
         {
           if(typeof(Storage)){
             var temp = localStorage.getItem($scope.events['current'][i].id);
             if(temp !=null)
                $scope.favorite.event[i] = 'glyphicon glyphicon-star';
           }
         }
      }
      break;
      case 'place':
      if($scope.hasPrev.place)
      {
        $scope.places ['next']    = $scope.places ['current'];
        $scope.places ['current'] = $scope.places ['prev'];

        $scope.paging.place['next'] = $scope.paging.place['current'];
        $scope.paging.place['current'] = $scope.paging.place['prev'];

        $scope.hasNext.place = true;
		var tempurl = $scope.paging.place['current'].previous;
        $http({
                method: 'GET',
                url: tempurl,
         }).then(function successCallback(response) {
             console.log(response);
             $scope.places ['prev'] = response.data.data;
             if(typeof(response.data.paging) !='undefined')
             {
                  $scope.paging.place['prev'] = response.data.paging;
                  if(typeof(response.data.paging.next)!='undefined')
                  {
                       $scope.hasPrev.place = true;
                  }
                  else {
                       $scope.hasPrev.place = false;
                  }
             }
             else {
               $scope.hasPrev.place = false;
               $scope.paging.place['prev'] = null;
             }

         }, function errorCallback(response) {
             console.log("Fail to get http response from url!-previous-place");
             $scope.hasPrev.place = false;
         });
         $scope.currentPage.place --;
         for(var i =0;i<25;i++)
         {
             $scope.favorite.place[i] = 'glyphicon glyphicon-star-empty';
         }
         for(var i = 0,len = $scope.places['current'].length;i<len;i++)
         {
           if(typeof(Storage)){
             var temp = localStorage.getItem($scope.places['current'][i].id);
             if(temp !=null)
                $scope.favorite.place[i] = 'glyphicon glyphicon-star';
           }
         }
      }
      break;
      case 'group':
      if($scope.hasPrev.group)
      {
        $scope.groups ['next']    = $scope.groups ['current'];
        $scope.groups ['current'] = $scope.groups ['prev'];

        $scope.paging.group['next'] = $scope.paging.group['current'];
        $scope.paging.group['current'] = $scope.paging.group['prev'];

        $scope.hasNext.group = true;
		var tempurl = $scope.paging.group['current'].previous;
        $http({
                method: 'GET',
                url: tempurl,
         }).then(function successCallback(response) {
             console.log(response);
             $scope.groups ['prev'] = response.data.data;
             if(typeof(response.data.paging) !='undefined')
             {
                  $scope.paging.group['prev'] = response.data.paging;
                  if(typeof(response.data.paging.next)!='undefined')
                  {
                       $scope.hasPrev.group = true;
                  }
                  else {
                       $scope.hasPrev.group = false;
                  }
             }
             else {
               $scope.hasPrev.group = false;
               $scope.paging.group['prev'] = null;
             }

         }, function errorCallback(response) {
             console.log("Fail to get http response from url!-previous-group");
             $scope.hasPrev.group = false;
         });
         $scope.currentPage.group --;
         for(var i =0;i<25;i++)
         {
             $scope.favorite.group[i] = 'glyphicon glyphicon-star-empty';
         }
         for(var i = 0,len = $scope.groups['current'].length;i<len;i++)
         {
           if(typeof(Storage)){
             var temp = localStorage.getItem($scope.groups['current'][i].id);
             if(temp !=null)
                $scope.favorite.group[i] = 'glyphicon glyphicon-star';
           }
         }
      }
      break;
      default:
      break;
    }
  };
  $scope.gotonext = function(type){
     switch(type)
     {
       case 'user':
       if($scope.hasNext.user)
       {
         $scope.users ['prev']    = $scope.users ['current'];
         $scope.users ['current'] = $scope.users ['next'];

         $scope.paging.user['prev'] = $scope.paging.user['current'];
         $scope.paging.user['current'] = $scope.paging.user['next'];

         $scope.hasPrev.user = true;
		 var tempurl = $scope.paging.user['current'].next;
         $http({
                 method: 'GET',
                 url: tempurl,
          }).then(function successCallback(response) {
              console.log(response);
              $scope.users ['next'] = response.data.data;
              if(typeof(response.data.paging) !='undefined')
              {
                   $scope.paging.user['next'] = response.data.paging;
                   if(typeof(response.data.paging.next)!='undefined')
                   {
                        $scope.hasNext.user = true;
                   }
                   else {
                        $scope.hasNext.user = false;
                   }
              }
              else {
                $scope.hasNext.user = false;
                $scope.paging.user['next'] = null;
              }

          }, function errorCallback(response) {
              console.log("Fail to get http response from url!-next-user");
              $scope.hasNext.user = false;
          });
          $scope.currentPage.user ++;
          for(var i =0;i<25;i++)
          {
              $scope.favorite.user[i]  = 'glyphicon glyphicon-star-empty';
          }
          for(var i = 0,len = $scope.users['current'].length;i<len;i++)
          {
            if(typeof(Storage)){
              var temp = localStorage.getItem($scope.users['current'][i].id);
              if(temp !=null)
                 $scope.favorite.user[i] = 'glyphicon glyphicon-star';
            }
          }
       }
       break;
       case 'page':
       if($scope.hasNext.page)
       {
         $scope.pages ['prev']    = $scope.pages ['current'];
         $scope.pages ['current'] = $scope.pages ['next'];

         $scope.paging.page['prev'] = $scope.paging.page['current'];
         $scope.paging.page['current'] = $scope.paging.page['next'];

         $scope.hasPrev.page = true;
		 var tempurl = $scope.paging.page['current'].next;
         $http({
                 method: 'GET',
                 url: tempurl,
          }).then(function successCallback(response) {
              console.log(response);
              $scope.pages ['next'] = response.data.data;
              if(typeof(response.data.paging) !='undefined')
              {
                   $scope.paging.page['next'] = response.data.paging;
                   if(typeof(response.data.paging.next)!='undefined')
                   {
                        $scope.hasNext.page = true;
                   }
                   else {
                        $scope.hasNext.page = false;
                   }
              }
              else {
                $scope.hasNext.page = false;
                $scope.paging.page['next'] = null;
              }

          }, function errorCallback(response) {
              console.log("Fail to get http response from url!-next-page");
              $scope.hasNext.page = false;
          });
          $scope.currentPage.page ++;
          for(var i =0;i<25;i++)
          {
              $scope.favorite.page[i]  = 'glyphicon glyphicon-star-empty';
          }
          for(var i = 0,len = $scope.pages['current'].length;i<len;i++)
          {
            if(typeof(Storage)){
              var temp = localStorage.getItem($scope.pages['current'][i].id);
              if(temp !=null)
                 $scope.favorite.page[i] = 'glyphicon glyphicon-star';
            }
          }
       }
       break;
       case 'event':
       if($scope.hasNext.event)
       {
         $scope.events ['prev']    = $scope.events ['current'];
         $scope.events ['current'] = $scope.events ['next'];

         $scope.paging.event['prev'] = $scope.paging.event['current'];
         $scope.paging.event['current'] = $scope.paging.event['next'];

         $scope.hasPrev.event = true;
		 var tempurl = $scope.paging.event['current'].next;
         $http({
                 method: 'GET',
                 url: tempurl,
          }).then(function successCallback(response) {
              console.log(response);
              $scope.events ['next'] = response.data.data;
              if(typeof(response.data.paging) !='undefined')
              {
                   $scope.paging.event['next'] = response.data.paging;
                   if(typeof(response.data.paging.next)!='undefined')
                   {
                        $scope.hasNext.event = true;
                   }
                   else {
                        $scope.hasNext.event = false;
                   }
              }
              else {
                $scope.hasNext.event = false;
                $scope.paging.event['next'] =null;
              }

          }, function errorCallback(response) {
              console.log("Fail to get http response from url!-next-event");
              $scope.hasNext.event = false;
          });
          $scope.currentPage.event ++;
          for(var i =0;i<25;i++)
          {
              $scope.favorite.event[i] = 'glyphicon glyphicon-star-empty';
          }
          for(var i = 0,len = $scope.events['current'].length;i<len;i++)
          {
            if(typeof(Storage)){
              var temp = localStorage.getItem($scope.events['current'][i].id);
              if(temp !=null)
                 $scope.favorite.event[i] = 'glyphicon glyphicon-star';
            }
          }
       }
       break;
       case 'place':
       if($scope.hasNext.place)
       {
         $scope.places ['prev']    = $scope.places ['current'];
         $scope.places ['current'] = $scope.places ['next'];

         $scope.paging.place['prev'] = $scope.paging.place['current'];
         $scope.paging.place['current'] = $scope.paging.place['next'];

         $scope.hasPrev.place = true;
		 var tempurl = $scope.paging.place['current'].next;
         $http({
                 method: 'GET',
                 url: tempurl,
          }).then(function successCallback(response) {
              console.log(response);
              $scope.places ['next'] = response.data.data;
              if(typeof(response.data.paging) !='undefined')
              {
                   $scope.paging.place['next'] = response.data.paging;
                   if(typeof(response.data.paging.next)!='undefined')
                   {
                        $scope.hasNext.place = true;
                   }
                   else {
                        $scope.hasNext.place = false;
                   }
              }
              else {
                $scope.hasNext.place = false;
                $scope.places ['next'] =null;
              }

          }, function errorCallback(response) {
              console.log("Fail to get http response from url!-next-place");
              $scope.hasNext.place = false;
          });
          $scope.currentPage.place ++;
          for(var i =0;i<25;i++)
          {
              $scope.favorite.place[i] = 'glyphicon glyphicon-star-empty';
          }
          for(var i = 0,len = $scope.places['current'].length;i<len;i++)
          {
            if(typeof(Storage)){
              var temp = localStorage.getItem($scope.places['current'][i].id);
              if(temp !=null)
                 $scope.favorite.place[i] = 'glyphicon glyphicon-star';
            }
          }
       }
       break;
       case 'group':
       if($scope.hasNext.group)
       {
         $scope.groups ['prev']    = $scope.groups ['current'];
         $scope.groups ['current'] = $scope.groups ['next'];

         $scope.paging.group['prev'] = $scope.paging.group['current'];
         $scope.paging.group['current'] = $scope.paging.group['next'];

         $scope.hasPrev.group = true;
		 var tempurl = $scope.paging.group['current'].next;
         $http({
                 method: 'GET',
                 url: tempurl,
          }).then(function successCallback(response) {
              console.log(response);
              $scope.groups ['next'] = response.data.data;
              if(typeof(response.data.paging) !='undefined')
              {
                   $scope.paging.user['next'] = response.data.paging;
                   if(typeof(response.data.paging.next)!='undefined')
                   {
                        $scope.hasNext.group = true;
                   }
                   else {
                        $scope.hasNext.group = false;
                   }
              }
              else {
                $scope.hasNext.group = false;
                $scope.places ['next'] = null;
              }

          }, function errorCallback(response) {
              console.log("Fail to get http response from url!-next-group");
              $scope.hasNext.group = false;
          });
          $scope.currentPage.group ++;
          for(var i =0;i<25;i++)
          {
              $scope.favorite.group[i] = 'glyphicon glyphicon-star-empty';
          }
          for(var i = 0,len = $scope.groups['current'].length;i<len;i++)
          {
            if(typeof(Storage)){
              var temp = localStorage.getItem($scope.groups['current'][i].id);
              if(temp !=null)
                 $scope.favorite.group[i] = 'glyphicon glyphicon-star';
            }
          }
       }
       break;
       default:
       break;
     }
  };

  $scope.clearpage = function(){
     $scope.keyin.val = '';
     $scope.users['prev'] = $scope.users['current'] =$scope.users['next'] = null;
     $scope.pages['prev'] = $scope.pages['current'] =$scope.pages['next'] = null;
     $scope.events['prev'] = $scope.events['current'] =$scope.events['next'] = null;
     $scope.places['prev'] = $scope.places['current'] =$scope.places['next'] = null;
     $scope.groups['prev'] = $scope.groups['current'] =$scope.groups['next'] = null;

     $scope.hasalbums = true;
     $scope.hasposts  = true;

     $scope.showtable = true;
     $scope.isprocessing = false;
     $scope.isprocessingdetail = false;
     $scope.info["name"] = "";
     $scope.info["profile"] = "";
     $scope.info["id"] = "";
     $scope.info['type']="";
     $scope.currentPage.user = $scope.currentPage.page = $scope.currentPage.event = $scope.currentPage.place = $scope.currentPage.group = 1;
     $scope.hasNext.user = $scope.hasNext.page = $scope.hasNext.event = $scope.hasNext.place = $scope.hasNext.group= false;
     $scope.hasPrev.user=$scope.hasPrev.page=$scope.hasPrev.event=$scope.hasPrev.place=$scope.hasPrev.group = false;
     for(var i =0;i<25;i++)
     {

         $scope.favorite.user[i]  = 'glyphicon glyphicon-star-empty';
         $scope.favorite.page[i]  = 'glyphicon glyphicon-star-empty';
         $scope.favorite.event[i] = 'glyphicon glyphicon-star-empty';
         $scope.favorite.place[i] = 'glyphicon glyphicon-star-empty';
         $scope.favorite.group[i] = 'glyphicon glyphicon-star-empty';

     }
  };

  $scope.detailinfo =function(id ,name,profile,type){
    $scope.isprocessingdetail =true;
    var url = 'https://graph.facebook.com/v2.8/'+ id +'?fields=albums.limit(5){name,photos.limit(2){name,picture}},posts.limit(5)&access_token=EAAC6vcfHGaEBAOZAZAXsoZBdHMJe7SU6s2qpKV2QmpZCTZAH9r1e2drz59ItUclvXpsDk9ySwgIhJAx3dS51qIWzypZA7C9Tq7vhFutdofJfS6JzGYZALQOFJUULq7B4ZAOBI0MJn49PpXPvjn8OoznPSmidZCRq3l2IlMOFxc55ZBygZDZD';
    $http.get(url).then(function successCallback(response) {
      console.log("detail for id = "+id);
      console.log(response);
      if(typeof(response.data.albums) !='undefined' && typeof(response.data.albums.data) !='undefined')
      {
        $scope.albums = response.data.albums.data;
        console.log("Albums = ");
        console.log($scope.albums);
        console.log($scope.albums.length);
        if($scope.albums.length == 0)
           $scope.hasalbums = false;
        else {
          $scope.hasalbums = true;
          $scope.albums.forEach(function(album){
            if(typeof(album.photos) !='undefined'&& typeof(album.photos.data) !='undefined' && album.photos.data.length>0)
              album.hasphotos = true;
            else {
              album.hasphotos =false;
            }
          });
        }
      }
      else {
        $scope.albums = null;
        $scope.hasalbums = false;
      }
      if(typeof(response.data.posts) !='undefined' && typeof(response.data.posts.data) !='undefined')
      {
        $scope.posts = response.data.posts.data;
        console.log("Posts = ");
        console.log($scope.posts);
        if($scope.posts.length == 0)
           $scope.hasposts = false;
        else {
          $scope.hasposts = false;
          $scope.posts.forEach(function(post){
            var time = post.created_time;
            time = time.replace("T"," ");
            var index = time.indexOf("+");
            time = time.slice(0,index);
            post.created_time = time;
            if(typeof(post.message) != 'undefined')
            {
              $scope.hasposts = true;
              post.hasmessage = true;
            }
            else {
              post.hasmessage = false;
            }
          });
        }

      }
      else {
        $scope.posts = null;
        $scope.hasposts = false;
      }
	 }, function errorCallback(response) {
      $scope.posts = null;
      $scope.hasposts = false;
      $scope.albums = null;
      $scope.hasalbums = false;
    });
    $scope.showtable = false;

    $scope.info.name = name;
    $scope.info.profile = profile;
    $scope.info.id = id;
    $scope.info.type = type;
    console.log("The post is by : "+$scope.info.name +". Profile = "+$scope.info.profile);

    angular.element('#detailpage').addClass('sliding-to-right');
    angular.element('#resulttable').removeClass('sliding-to-left');
    $scope.isprocessingdetail = false;

    if(typeof(localStorage)!='undefined'){
      var temp = localStorage.getItem(id);
      if(temp == null)
         $scope.detailfav = "glyphicon glyphicon-star-empty";
      else {
        $scope.detailfav = "glyphicon glyphicon-star";
      }
    }
  };

  $scope.returntohome = function(){
    $scope.favoriteList = new Array();
    for(var i = 0,len = localStorage.length;i<=len-1;i++)
    {
        $scope.favoriteList[i] = new Object();
        $scope.favoriteList[i].id =  localStorage.key(i);
        str  = localStorage.getItem(localStorage.key(i));
        typeindex = str.indexOf("&type=");
        urlindex = str.indexOf("&url=");
        nameindex  = str.indexOf("&name=");
        $scope.favoriteList[i].type = str.substring(typeindex+6,urlindex);
        $scope.favoriteList[i].url  = str.substring(urlindex+5,nameindex);
        $scope.favoriteList[i].name   = str.substring(nameindex+6);
    }
    for(var i =0;i<25;i++)
    {
        $scope.favorite.user[i]  = 'glyphicon glyphicon-star-empty';
    }
    for(var i = 0,len = $scope.users['current'].length;i<len;i++)
    {
      if(typeof(Storage)){
        var temp = localStorage.getItem($scope.users['current'][i].id);
        if(temp !=null)
           $scope.favorite.user[i] = 'glyphicon glyphicon-star';
      }
    }

    for(var i =0;i<25;i++)
    {
        $scope.favorite.page[i]  = 'glyphicon glyphicon-star-empty';
    }
    for(var i = 0,len = $scope.pages['current'].length;i<len;i++)
    {
      if(typeof(Storage)){
        var temp = localStorage.getItem($scope.pages['current'][i].id);
        if(temp !=null)
           $scope.favorite.page[i] = 'glyphicon glyphicon-star';
      }
    }

    for(var i =0;i<25;i++)
    {
        $scope.favorite.event[i]  = 'glyphicon glyphicon-star-empty';
    }
    for(var i = 0,len = $scope.events['current'].length;i<len;i++)
    {
      if(typeof(Storage)){
        var temp = localStorage.getItem($scope.events['current'][i].id);
        if(temp !=null)
           $scope.favorite.event[i] = 'glyphicon glyphicon-star';
      }
    }

    for(var i =0;i<25;i++)
    {
        $scope.favorite.place[i]  = 'glyphicon glyphicon-star-empty';
    }
    for(var i = 0,len = $scope.places['current'].length;i<len;i++)
    {
      if(typeof(Storage)){
        var temp = localStorage.getItem($scope.places['current'][i].id);
        if(temp !=null)
           $scope.favorite.place[i] = 'glyphicon glyphicon-star';
      }
    }

    for(var i =0;i<25;i++)
    {
        $scope.favorite.group[i]  = 'glyphicon glyphicon-star-empty';
    }
    for(var i = 0,len = $scope.groups['current'].length;i<len;i++)
    {
      if(typeof(Storage)){
        var temp = localStorage.getItem($scope.groups['current'][i].id);
        if(temp !=null)
           $scope.favorite.group[i] = 'glyphicon glyphicon-star';
      }
    }
    angular.element('#detailpage').removeClass('sliding-to-right');
    angular.element('#resulttable').addClass('sliding-to-left');

    $scope.showtable = true;
  };

  $scope.postToFB = function(name, profile){
    if (typeof(FB) != 'undefined'
     && FB != null ) {
       FB.ui({
            app_id: '376439482742935',
            method: 'feed',
            link: window.location.href,
            picture: profile,
            name: name,
            caption: "FB SEARCH FROM USC CSCI571",
             }, function(response){
               if (response && !response.error_message)
               {
                 alert("Posted Successfully");
               }
               else
               {
                 alert("Not Posted");
               }
            });

     } else {
    // alert the user
     }

  };

  $scope.enterEvent = function(e) {
        var keycode = window.event?e.keyCode:e.which;
        if(keycode==13){
            $scope.submitsearch();
        }
    };

  $scope.removeFromFav = function(id){
    if(typeof(Storage)){
      localStorage.removeItem(id);
      $scope.favoriteList = new Array();
      for(var i = 0,len = localStorage.length;i<=len-1;i++)
      {
          $scope.favoriteList[i] = new Object();
          $scope.favoriteList[i].id =  localStorage.key(i);
          str  = localStorage.getItem(localStorage.key(i));
          typeindex = str.indexOf("&type=");
          urlindex = str.indexOf("&url=");
          nameindex  = str.indexOf("&name=");
          $scope.favoriteList[i].type = str.substring(typeindex+6,urlindex);
          $scope.favoriteList[i].url  = str.substring(urlindex+5,nameindex);
          $scope.favoriteList[i].name   = str.substring(nameindex+6);
      }
      for(var i =0;i<25;i++)
      {
          $scope.favorite.user[i]  = 'glyphicon glyphicon-star-empty';
      }
      for(var i = 0,len = $scope.users['current'].length;i<len;i++)
      {
        if(typeof(Storage)){
          var temp = localStorage.getItem($scope.users['current'][i].id);
          if(temp !=null)
             $scope.favorite.user[i] = 'glyphicon glyphicon-star';
        }
      }

      for(var i =0;i<25;i++)
      {
          $scope.favorite.page[i]  = 'glyphicon glyphicon-star-empty';
      }
      for(var i = 0,len = $scope.pages['current'].length;i<len;i++)
      {
        if(typeof(Storage)){
          var temp = localStorage.getItem($scope.pages['current'][i].id);
          if(temp !=null)
             $scope.favorite.page[i] = 'glyphicon glyphicon-star';
        }
      }

      for(var i =0;i<25;i++)
      {
          $scope.favorite.event[i]  = 'glyphicon glyphicon-star-empty';
      }
      for(var i = 0,len = $scope.events['current'].length;i<len;i++)
      {
        if(typeof(Storage)){
          var temp = localStorage.getItem($scope.events['current'][i].id);
          if(temp !=null)
             $scope.favorite.event[i] = 'glyphicon glyphicon-star';
        }
      }

      for(var i =0;i<25;i++)
      {
          $scope.favorite.place[i]  = 'glyphicon glyphicon-star-empty';
      }
      for(var i = 0,len = $scope.places['current'].length;i<len;i++)
      {
        if(typeof(Storage)){
          var temp = localStorage.getItem($scope.places['current'][i].id);
          if(temp !=null)
             $scope.favorite.place[i] = 'glyphicon glyphicon-star';
        }
      }

      for(var i =0;i<25;i++)
      {
          $scope.favorite.group[i]  = 'glyphicon glyphicon-star-empty';
      }
      for(var i = 0,len = $scope.groups['current'].length;i<len;i++)
      {
        if(typeof(Storage)){
          var temp = localStorage.getItem($scope.groups['current'][i].id);
          if(temp !=null)
             $scope.favorite.group[i] = 'glyphicon glyphicon-star';
        }
      }
    }
  };

  $scope.changeFav= function(){
    var id = $scope.info.id;
    if($scope.detailfav == 'glyphicon glyphicon-star'){  //remove from fav
      $scope.detailfav = 'glyphicon glyphicon-star-empty';
       if(typeof(Storage)!='undefined'){
         localStorage.removeItem(id);
       }
    }
    else{               //add to favorite
      $scope.detailfav = 'glyphicon glyphicon-star';
      localStorage.setItem(id,"&type="+$scope.info.type+"&url="+$scope.info.profile+"&name="+$scope.info.name);
    }
  };
});


app.directive("myPagination",function(){
  return{
    restrict:'EA',
    template:"<div><button type='button' class='btn btn-default pull-left' id='pageprevious' ng-click='gotoprev(&apos;user&apos;)'>Previous</button><button type='button' class='btn btn-default pull-right' id='pagenext' ng-click='gotonext(&apos;user&apos;)'>Next</button></div>",
    replace: true,
    link:function($scope,element,Attrs){
    }
  };
});
