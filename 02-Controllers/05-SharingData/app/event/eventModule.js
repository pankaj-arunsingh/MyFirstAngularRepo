

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
.controller('EventCtrl', ['$scope', '$rootScope','MainTitle', function ($scope,$rootScope,mainTitle) {
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
	//Demo Code for sharing Data  between two different controllers
	$scope.message3 = "Clicked!";
	$rootScope.click = function() {
	$rootScope.$broadcast("update", $scope.message3);
};
}])
.controller('EventItemCtrl', ['$scope','$rootScope' ,'MainTitle', function ($scope,$rootScope,mainTitle) {
	$scope.itemTitle=mainTitle.title+" in San Francisco";
	$scope.description=mainTitle.title+" is a one day event that teaches kids how to code";
	$scope.imgSrc ="assets/img/sanfran_big.jpg";
	$scope.date ="April 4, 2015";
	
	//Demo Code for sharing Data  From Parent to child
	$scope.message = "Child updated from parent controller";
	
	$scope.clickFunction = function() {
	$scope.$broadcast('update_controller', $scope.message);
	};
	//Demo Code for sharing Data  From Child to Parent
	$scope.message2="Some text in parent";
	$scope.$on("update_controller2", function(event, message){
	$scope.message2 = message;
	});
	//Demo Code for sharing Data  between two different controllers
	$scope.message3 = "Waiting for a click...";
	$rootScope.$on("update", function(event, message) {
	$scope.message3 = message;
	});
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
	
	//Demo code for sharing data  From Parent to child
	$scope.message = "Some text in child controller";
	$scope.$on("update_controller", function(event, message) {
	$scope.message = message;
	});
	
	//Demo Code for sharing Data  From Child to Parent
	$scope.message2 = "Parent updated from Child Controller";
	$scope.clickFunction = function() {
	$scope.message2 = "Parent updated";
	$scope.$emit('update_controller2', $scope.message2);
}
}])


})();