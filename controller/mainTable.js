var exampleModule = angular.module('exampleModule', []);

exampleModule.controller('exampleController', function ($scope, $http) {
	$http.get('http://jsonplaceholder.typicode.com/comments').then(function (response){
			$scope.item = response.data;
	}) 
})