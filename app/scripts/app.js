'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
function init_app(){
 angular
 .module('yapp', [
    'ui.router',
    'snap',
    'ngAnimate',
    'angular-carousel',
    'ui.bootstrap'
    ])
 .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
    .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
    })
    .state('login', {
      url: '/login',
      parent: 'base',
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
  })
    .state('dashboard', {
      url: '/dashboard',
      parent: 'base',
      templateUrl: 'views/dashboard.html',
      controller: 'DashboardCtrl'
  })
    .state('overview', {
        url: '/overview',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/overview.html'
    })
    .state('reports', {
        url: '/reports',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/reports.html'
    })
    .state('galery', {
        url: '/galery',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/galery/galery.html'
    });

})
.controller('CarouselDemoCtrl', function($scope) {
    	 $scope.myInterval = 3000;
   	  $scope.slides = [
   	    {
   	      image: 'http://lorempixel.com/400/200/'
   	    },
   	    {
   	      image: 'http://lorempixel.com/400/200/food'
   	    },
   	    {
   	      image: 'http://lorempixel.com/400/200/sports'
   	    },
   	    {
   	      image: 'http://lorempixel.com/400/200/people'
   	    }
   	  ];
   		gapi.client.imageApi.imageApi.getImages().execute(function(resp) {
   	    
        for (i in resp.items){
           // var item = resp.items[i];
            $scope.slides.push({image:'http://lorempixel.com/400/200/people'})
        }
  
   	    $scope.$apply();
   	  });
   	
  
    });
}