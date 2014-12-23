app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
			controller: 'baseController',
            templateUrl: 'app/components/base/base.html'
        })
        .state('leiderNeinAberCoolesLied', {
            url: '/leiderNeinAberCoolesLied',
			templateUrl: 'app/components/leiderNeinAberCoolesLied/leiderNeinAberCoolesLied.html'
        });
    $urlRouterProvider.otherwise('/home');
});