

(function(){

angular.module('eventModule', [])
.config([function () {
	console.log("Event Module:: config");
}])
.run([function () {
	console.log("Event Module::running");
}])
.controller('EventCtrl', ['$scope', function ($scope) {
	$scope.title = "Young AngularJS Developers";
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
.controller('EventItemCtrl', ['$scope', function ($scope) {
	$scope.itemTitle="Young Developers in Seattle";
	$scope.description="Young Developers  is a one day event that teaches kids how to code";
	$scope.imgSrc ="assets/img/seattle_big.jpg";
	$scope.date ="July 24, 2015";
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