var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
  $scope.phones = [
    {'name': 'Name 1',
     'snippet': 'Desc 1'},
    {'name': 'Name 2',
     'snippet': 'Desc 2'},
    {'name': 'Name 3',
     'snippet': 'Desc 3'}
  ];
  console.log($scope.phones[0]);
});