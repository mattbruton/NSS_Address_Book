"use strict";

app.controller("ItemNewCtrl", function($scope) {
  $scope.newContact = {};

  $scope.items = [

    {
      id: 0,
      firstName: "Matt",
      lastName: "Bruton",
      email: "the.bruton@gmail.com",
      cellTel: "615-238-1151",
      favorites: true
    },
    {
      id: 1,
      firstName: "Emily",
      lastName: "Bruton",
      email: "emily@gmail.com",
      cellTel: "615-555-1151",
      favorites: true
    },
    {
      id: 2,
      firstName: "Jim",
      lastName: "Bruton",
      email: "otherbruton@gmail.com",
      cellTel: "615-555-5151",
      favorites: true
    }

  ];

  $scope.addNewItem = function() {
    $scope.newContact.id =$scope.items.length;
    $scope.items.push($scope.newContact);
    $scope.newContact = "";
  };

});