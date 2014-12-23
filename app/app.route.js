app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
			controller: 'baseController',
            templateUrl: 'app/components/base/base.html'
        })
		.state('start', {
			url: '/start',
			controller: 'startController',
			templateUrl: 'app/components/start/start.html'
		})
        .state('thinkingAboutYou', {
            url: '/thinkingAboutYou',
			controller: 'thinkingAboutYouController',
			templateUrl: 'app/components/thinkingAboutYou/thinkingAboutYou.html'
        })
		.state('wichtigstesDatum', {
            url: '/wichtigstesDatum',
			controller: 'wichtigstesDatumController',
			templateUrl: 'app/components/wichtigstesDatum/wichtigstesDatum.html'
        });
    $urlRouterProvider.otherwise('/home');
});