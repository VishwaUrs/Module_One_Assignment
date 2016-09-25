(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchController', LunchController);

function LunchController ($scope,
                       $filter,
                       $injector) {
  $scope.checkFood = function () {
      $scope.warningMessage="";
    var fooditems = $scope.FoodItems;
    $scope.displayColor="transparent";
    if($scope.FoodItems==null){
      $scope.message = "Please enter data first";
      $scope.displayColor="Red";
      return;
    }
    var items = fooditems.split(",");
    var itemNumber = items.length;
    var emptyItems = 0;
    for(var index=0; index<itemNumber;index++){
      if(items[index]==""){
        emptyItems++;
        $scope.warningMessage = "Empty item is not considered for the count";
      }
    }
    itemNumber-=emptyItems;
    $scope.displayColor="transparent";
    if(itemNumber==0){
      $scope.message = "Please enter data first";
      $scope.displayColor = "Red";
    }
    else if(itemNumber<=3){
        $scope.message = "Enjoy"
          $scope.displayColor = "Green";
    }else{
        $scope.message = "Too much";
        $scope.displayColor = "Green";
    }
  };

  $scope.displayMessage = function () {
    return $scope.message;
  };

}
})();
