var app = angular.module('ChrissiChristmasGift2014App', ['ui.router']);

app.controller('baseController', function($scope, $state) {
	$scope.password = "";
	$scope.validatePassword = function(){
		console.log($scope.password);
		$state.go($scope.password);
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

app.controller('startController', function($scope, $state) {
	$scope.password = "";
	$scope.validatePassword = function(){
		if($scope.password === "23.03.2011"){
			alert("Juhuu richtig");
			$state.go("startOK");
		}
		else {
			alert("Leider falsch. Probiers nochmal :)");
		}
	};
});

app.controller('riddle1Controller', function($scope, $state) {
	$scope.password = "";
	$scope.validatePassword = function(){
		if($scope.password === "Wind"){
			alert("Juhuu richtig");
			$state.go("riddle1OK");
		}
		else {
			alert("Leider falsch. Probiers nochmal :)");
		}
	};
});

app.controller('riddle2Controller', function($scope, $state) {
	$scope.password = "";
	$scope.validatePassword = function(){
		if($scope.password === "Lucario"){
			alert("Juhuu richtig");
			$state.go("riddle2OK");
		}
		else {
			alert("Leider falsch. Probiers nochmal :)");
		}
	};
});

app.controller('riddle3Controller', function($scope, $state) {
	$scope.password = "";
	$scope.validatePassword = function(){
		if($scope.password === "Bodyweight Training"){
			alert("Juhuu richtig");
			$state.go("riddle3OK");
		}
		else {
			alert("Leider falsch. Probiers nochmal :)");
		}
	};
});

app.controller('riddle4Controller', function($scope, $state) {
	$scope.password = "";
	$scope.validatePassword = function(){
		if($scope.password === "27" || $scope.password === "Siebenundzwanzig"){
			alert("Juhuu richtig");
			$state.go("riddle4OK");
		}
		else {
			alert("Leider falsch. Probiers nochmal :)");
		}
	};
});

app.controller('riddle5Controller', function($scope, $state) {
	$scope.password = "";
	$scope.validatePassword = function(){
		if($scope.password === "Yellowcard"){
			alert("Juhuu richtig");
			$state.go("riddle5OK");
		}
		else {
			alert("Leider falsch. Probiers nochmal :)");
		}
	};
});

app.controller('riddle6Controller', function($scope, $state) {
	$scope.password = "";
	$scope.validatePassword = function(){
		if($scope.password === "HTML"){
			alert("Juhuu richtig");
			$state.go("riddle6OK");
		}
		else {
			alert("Leider falsch. Probiers nochmal :)");
		}
	};
});

app.controller('riddle7Controller', function($scope, $state) {
	$scope.password = "";
	$scope.validatePassword = function(){
		if($scope.password === "Marcel Hirscher"){
			alert("Juhuu richtig");
			$state.go("riddle7OK");
		}
		else {
			alert("Leider falsch. Probiers nochmal :)");
		}
	};
});

app.controller('riddle8Controller', function($scope, $state) {
	$scope.password = "";
	$scope.validatePassword = function(){
		if($scope.password === "Safal" || $scope.password === "Schafal"){
			alert("Juhuu richtig");
			$state.go("riddle8OK");
		}
		else {
			alert("Leider falsch. Probiers nochmal :)");
		}
	};
});

app.controller('riddle9Controller', function($scope, $state) {
	$scope.password = "";
	$scope.validatePassword = function(){
		if($scope.password === "Disneyland"){
			alert("Juhuu richtig");
			$state.go("riddle9OK");
		}
		else {
			alert("Leider falsch. Probiers nochmal :)");
		}
	};
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