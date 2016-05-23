"use strict";

app.controller("ItemListCtrl", function($scope) {

  $scope.items = [

    {
      id: 0,
      firstName: "Matt",
      lastName: "Bruton",
      address: "1107 Fernbank Ave",
      email: "the.bruton@gmail.com",
      cellTel: "615-238-1151",
      favorites: true
    },
    {
      id: 1,
      firstName: "Emily",
      lastName: "Bruton",
      address: "1107 Fernbank Ave",
      email: "emily@gmail.com",
      cellTel: "615-555-1151",
      favorites: true
    },
    {
      id: 2,
      firstName: "Jim",
      lastName: "Bruton",
      address: "1010 Street Ave",
      email: "otherbruton@gmail.com",
      cellTel: "615-555-5151",
      favorites: true
    }

  ];

});