angular
  .module("mdLunches", [
    "ui.router",
    "ngResource"
  ])
  .config(["$stateProvider", RouterFunction])
  // .factory("SchoolYearFactory", [
  //   "$http",
  //   SchoolYearFactoryFunction
  // ])
  .controller("LunchIndexCtrler", [
    "$http",
    "$scope",
    LunchIndexControllerFunction
  ])



function RouterFunction($stateProvider){
  $stateProvider
  .state("lunchIndex",{
    url: "/mdlunches",
    templateUrl: "js/ng-views/index.html",
    controller: "LunchIndexCtrler",
    controllerAs: "vm"
  })
}



function LunchIndexControllerFunction($http, $scope){
  $http.get(`https://data.maryland.gov/resource/7dst-j5if.json?$select=school_year`)
   .then(function(res){
     $scope.school_years = res.data.map(obj => obj.school_year)
   }, function(err){
     console.log(err)
   });
}

function getSelected(){
  var selected = $("#myselect").val()
  console.log(selected)
}
