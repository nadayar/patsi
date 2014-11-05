'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$http', '$location', 'Authentication',
	function($scope, $http, $location, Authentication) {
		$scope.authentication = Authentication;
		$scope.userRole = '';
		// If user is signed in then redirect back home
		if ($scope.authentication.user.userRoles === 'user') $location.path('/signin');

		$scope.signup = function() {
			console.log($scope.credentials);
			if(($scope.credentials.email.substring($scope.credentials.email.indexOf('@'), $scope.credentials.email.length)) === '@andela.co'){
        		$scope.credentials.userRoles = 'admin';
    		} else {
        		$scope.credentials.userRoles = 'user';
    		} 
			$http.post('/auth/signup', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
		$scope.passMatch = false;
		$scope.passMatch2 = true;
		$scope.checkpass = function(){
			console.log($scope.credentials.password);
			if ($scope.credentials.password === $scope.credentials.confirmPassword)
			{
				$scope.passMatch = false;
				$scope.passMatch2 = false;
			}
			else{
				$scope.passMatch = true;
				$scope.passMatch2 = true;
			}
		};
		$scope.signin = function() {
			console.log($scope.credentials);
			$http.post('/auth/signin', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
