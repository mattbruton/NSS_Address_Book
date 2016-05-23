"use strict";

app.controller("NavCtrl", function($scope) {
  $scope.navItems = [
  {
    name: "Add Contact",
    url: '#/items/new',
    class: 'plus'
  },{
    name: "List All Contacts",
    url: '#/items/list',
    class: 'list'
  }, {
    name: "Favorites",
    url: '#/items/favorties',
    class: 'star'
  }
  ];
});