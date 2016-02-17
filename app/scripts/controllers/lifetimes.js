'use strict';

(function(moment) {

/**
 * @ngdoc function
 * @name lifetimesApp.controller:LifetimesCtrl
 * @description
 * # LifetimesCtrl
 * Controller of the lifetimesApp
 */
angular.module('lifetimesApp')
  .controller('LifetimesCtrl', ['$scope', function (scope) {

    scope.dateFormat = 'yyyy';
    scope.yearIsOpen = false;

    scope.openYear = function() {
      scope.yearIsOpen = true;
    };

    scope.getLifetimes = function() {
      if (!scope.year || !scope.age) {
        scope.lifetimes = "indeterminate";
        return;
      }
      var years = moment().diff(moment(new Date(scope.year)), 'years');
      scope.lifetimes = roundDecimals(years / scope.age, 1);
    };

    function roundDecimals(num, places) {
      var decimals = parseInt("1" + _.repeat("0", places));
      return Math.round(num * decimals) / decimals;
    }

  }]);

})(moment);
