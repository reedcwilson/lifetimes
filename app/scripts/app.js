'use strict';

/**
 * @ngdoc overview
 * @name lifetimesApp
 * @description
 * # lifetimesApp
 *
 * Main module of the application.
 */
angular
  .module('lifetimesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/lifetimes.html',
        controller: 'LifetimesCtrl',
        controllerAs: 'lf'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
