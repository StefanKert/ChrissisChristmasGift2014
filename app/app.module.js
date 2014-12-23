var app = angular.module('ChrissiChristmasGift2014App', ['ui.router']);


app.controller('baseController', function($scope, $state) {
	$scope.password = "";
	$scope.validatePassword = function(){
		if($scope.password === "23.03.2011"){
			alert("Juhuu richtig");
			$state.go("wichtigstesDatum");
		}
	};
});

app.controller('thinkingAboutYouController', function($scope, $state) {
	var is_mobile = !!navigator.userAgent.match(/iphone|android|blackberry/ig) || false;
	
	if(is_mobile){
		alert("Schatzi :) Mobile Geräte sind nicht erlaubt :P probiers am Computer nochmal :).");
		$state.go("home");
	}
});

app.controller('wichtigstesDatumController', function($scope, $state) {
	var is_mobile = !!navigator.userAgent.match(/iphone|android|blackberry/ig) || false;
	
	if(is_mobile){
		alert("Schatzi :) Mobile Geräte sind nicht erlaubt :P probiers am Computer nochmal :).");
		$state.go("home");
	}
});

app.controller('AppController', function ($scope, $http, $rootScope, $location, $state) {
    $rootScope.showReturn = false;

    $rootScope.$on('$stateChangeError', function () {
        $location.path($location.path());
    });
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        console.log('$stateChangeStart to ' + toState.to + '- fired when the transition begins. toState,toParams : \n', toState, toParams);
    });

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams) {
        console.log('$stateChangeError - fired when an error occurs during transition.');
        console.log(arguments);
    });

    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        console.log('$stateChangeSuccess to ' + toState.name + '- fired once the state transition is complete.');
    });

    $rootScope.$on('$viewContentLoaded', function (event) {
        console.log('$viewContentLoaded - fired after dom rendered', event);
    });

    $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
        console.log('The state ' + unfoundState.to + ' was not fired.');
        console.log(unfoundState, fromState, fromParams);
    });
    $scope.unassigned = 15;
    $scope.goToPage = function (state) {
        console.log(state);
        $state.go(state);
    };
    $scope.refreshPage = function () {
        console.log($state.current.name);
        $state.go($state.current.name);
    };
    $scope.isActive = function (state) {
        return $state.current.name === state;
    };
});