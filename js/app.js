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
  self = $scope
  $http.get(`https://data.maryland.gov/resource/7dst-j5if.json?$select=school_year`)
   .then(function(res){
     $scope.school_years = res.data.map(obj => obj.school_year)
   }, function(err){
     console.log(err)
   });
}
  // getting the value of the year selected
    function getSelected(){
      var selected = $("#myselect").val()
      getYearData(selected)
    }

  // Pulling in specific data according to year
    function getYearData(sel ){
      console.log(sel)
      $.ajax({
        url:`https://data.maryland.gov/resource/7dst-j5if.json?school_year=${sel}`,
        success: function(res){
                  self.year_data = res
                 console.log(self.year_data)
               }
      })
      counters()

    }

  // code for the counters
    function counters() {
    $('.counter').each(function() {
      var num = $(this),
          countTo = num.attr('data-count');
      $({ countNum: num.text()}).animate({
        countNum: countTo
      },

      {

        duration: 2300,
        easing:'linear',
        step: function() {
          num.text(Math.floor(this.countNum));
        },
        complete: function() {
          num.text(this.countNum);
          //alert('finished');
        }

      });

    });
    }
