'use strict';

describe('Controller: LifetimesCtrl', function () {

  // load the controller's module
  beforeEach(module('lifetimesApp'));

  var LifetimesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LifetimesCtrl = $controller('LifetimesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should open the year datepicker', function() {
    expect(scope.yearIsOpen).toBe(false);
    scope.openYear();
    expect(scope.yearIsOpen).toBe(true);
  });

  it('should calculate the correct number of lifetimes', function () {
    scope.year = "Sat Jan 01 1820 00:00:00 GMT-0700 (MST)";
    scope.age = 27;
    scope.getLifetimes();
    expect(scope.lifetimes).toBe(7.259);
  });
});
