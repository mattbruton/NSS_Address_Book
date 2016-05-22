"use strict";

app.controller("NavCtrl", function($scope) {
  $scope.navItems = [
  {
    name: "Add Contact",
    url: '#/add'
  },{
    name: "List Contacts",
    url: '#/list'
  }, {
    name: "Favorites",
    url: '#/favorties'
  }
  ];
});