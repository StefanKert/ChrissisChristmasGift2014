app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
			controller: 'baseController',
            templateUrl: 'app/components/base/base.html'
        })
		.state('Start', {
			url: '/start',
			controller: 'startController',
			templateUrl: 'app/components/start/start.html'
		})
		.state('startOK', {
			url: '/startOK',
			controller: 'baseController',
			templateUrl: 'app/components/start/startOK.html'
		})
		.state('DerHobbit', {
			url: '/derhobbit',
			controller: 'riddle1Controller',
			templateUrl: 'app/components/riddle1/riddle1.html'
		})
		.state('riddle1OK', {
			url: '/riddle1OK',
			controller: 'baseController',
			templateUrl: 'app/components/riddle1/riddle1OK.html'
		})
		.state('PokemonY', {
			url: '/pokemony',
			controller: 'riddle2Controller',
			templateUrl: 'app/components/riddle2/riddle2.html'
		})
		.state('riddle2OK', {
			url: '/riddle2OK',
			controller: 'baseController',
			templateUrl: 'app/components/riddle2/riddle2OK.html'
		})
		.state('Sport', {
			url: '/sport',
			controller: 'riddle3Controller',
			templateUrl: 'app/components/riddle3/riddle3.html'
		})
		.state('riddle3OK', {
			url: '/riddle3OK',
			controller: 'baseController',
			templateUrl: 'app/components/riddle3/riddle3OK.html'
		})
		.state('Mathematik', {
			url: '/mathematik',
			controller: 'riddle4Controller',
			templateUrl: 'app/components/riddle4/riddle4.html'
		})
		.state('riddle4OK', {
			url: '/riddle4OK',
			controller: 'baseController',
			templateUrl: 'app/components/riddle4/riddle4OK.html'
		})
		.state('Musik', {
			url: '/musik',
			controller: 'riddle5Controller',
			templateUrl: 'app/components/riddle5/riddle5.html'
		})
		.state('riddle5OK', {
			url: '/riddle5OK',
			controller: 'baseController',
			templateUrl: 'app/components/riddle5/riddle5OK.html'
		})
		.state('Programmieren', {
			url: '/programmieren',
			controller: 'riddle6Controller',
			templateUrl: 'app/components/riddle6/riddle6.html'
		})
		.state('riddle6OK', {
			url: '/riddle6OK',
			controller: 'baseController',
			templateUrl: 'app/components/riddle6/riddle6OK.html'
		})
		.state('Schifahren', {
			url: '/schifahren',
			controller: 'riddle7Controller',
			templateUrl: 'app/components/riddle7/riddle7.html'
		})
		.state('riddle7OK', {
			url: '/riddle7OK',
			controller: 'baseController',
			templateUrl: 'app/components/riddle7/riddle7OK.html'
		})
		.state('Kinder', {
			url: '/kinder',
			controller: 'riddle8Controller',
			templateUrl: 'app/components/riddle8/riddle8.html'
		})
		.state('riddle8OK', {
			url: '/riddle8OK',
			controller: 'baseController',
			templateUrl: 'app/components/riddle8/riddle8OK.html'
		})
		.state('Reisen', {
			url: '/reisen',
			controller: 'riddle9Controller',
			templateUrl: 'app/components/riddle9/riddle9.html'
		})
		.state('riddle9OK', {
			url: '/riddle9OK',
			controller: 'baseController',
			templateUrl: 'app/components/riddle9/riddle9OK.html'
		})
		.state('Finale', {
			url: '/finale',
			controller: 'baseController',
			templateUrl: 'app/components/finale/finale.html'
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