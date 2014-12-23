app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
			controller: 'baseController',
            templateUrl: 'app/components/base/base.html'
        })
        .state('customers', {
            url: '/customers',
            abstract: true,
            template: '<div ui-view></div>'
        })
        .state('customers.add', {
            url: '/add',
            templateUrl: '/app/components/customer/add.html',
            controller: 'customerAddController'
        })
        .state('customers.inquiry', {
            url: '/inquiry',
            templateUrl: '/app/components/customer/inquiry.html',
            controller: 'customerInquiryController'
        })
        .state('customers.details', {
            url: '/{customerId:string}',
            templateUrl: '/app/components/customer/details.html',
            controller: 'customerDetailsController'
        })
        .state('databases', {
            url: '/databases',
            abstract: true,
            template: '<div ui-view></div>'
        })
        .state('databases.add', {
            url: '/add/{customerId:string}',
            templateUrl: '/app/components/database/add.html',
            controller: 'databaseAddController'
        })
        .state('databases.inquiry', {
            url: '/inquiry/{customerId:string}',
            templateUrl: '/app/components/database/inquiry.html',
            controller: 'databaseInquiryController'
        })
        .state('databases.details', {
            url: '/{customerId:string}',
            templateUrl: '/app/components/database/details.html',
            controller: 'databaseDetailsController'
        })
        .state('log', {
            url: '/log',
            abstract: true,
            template: '<div ui-view></div>'
        })
        .state('log.info', {
            url: '/info',
            controller: 'logController',
            templateUrl: '/app/components/log/inquiry.info.html'
        })
        .state('log.warning', {
            url: '/warning',
            controller: 'logController',
            templateUrl: '/app/components/log/inquiry.warning.html'
        })
        .state('log.error', {
            url: '/error',
            controller: 'logController',
            templateUrl: '/app/components/log/inquiry.error.html'
        })
        .state('log.fatal', {
            url: '/fatal',
            controller: 'logController',
            templateUrl: '/app/components/log/inquiry.fatal.html'
        });
    $urlRouterProvider.otherwise('/home');
});