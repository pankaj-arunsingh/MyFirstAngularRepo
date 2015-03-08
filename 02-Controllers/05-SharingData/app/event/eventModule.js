

(function(){

angular.module('eventModule', [])
.factory('MainTitle', [function () {
	

	return {
		title:"Young AngularJS Developers"
	};
}])
.config([function () {
	console.log("Event Module:: config");
}])
.run([function () {
	console.log("Event Module::running");
}])
.controller('EventCtrl', ['$scope', 'MainTitle',function ($scope,mainTitle) {
	$scope.title = mainTitle.title;
	$scope.menu=[
		{
			name:"Events",
			href:"index.html"
		},
		{
			name:"Contact",
			href:"contact.html"
		}
	]

	$scope.index = 0;

	$scope.setIndex=function(val)
	{
		$scope.index = val;
		console.log("called")
	}

	$scope.getIndex=function(){
		return($scope.index);
	}
	
}])
.controller('EventItemCtrl', ['$scope','MainTitle',  function ($scope,mainTitle) {
	$scope.itemTitle=mainTitle.title+" in San Francisco";
	$scope.description=mainTitle.title+" is a one day event that teaches kids how to code";
	$scope.imgSrc ="assets/img/sanfran_big.jpg";
	$scope.date ="April 4, 2015";
}])
.controller('EventTabCtrl', ['$scope', function ($scope) {
	$scope.tab = 0;
	console.log("yes")
	$scope.setTab=function(val)
	{
		$scope.tab = val;
	}
	$scope.getTab=function(val)
	{
		return($scope.tab);
	}
	
}])


})();