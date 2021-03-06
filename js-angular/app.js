angular
  .module("mdLunches", [
    "ui.router",
    "ngResource"
  ])
  .config(["$stateProvider", RouterFunction])

  .controller("AboutCtrl",[])
  .controller("LunchIndexCtrl", [
    "$http",
    "$scope",
    LunchIndexControllerFunction
  ])



function RouterFunction($stateProvider){
  $stateProvider
  .state("about", {
    url: "/about",
    templateUrl: "js-angular/ng-views/about.html",
    controller: "AboutCtrl",
    controllerAs: "vm"
  })
  .state("lunchIndex",{
    url: "/mdfacts",
    templateUrl: "js-angular/ng-views/index.html",
    controller: "LunchIndexCtrl",
    controllerAs: "vm"
  })
  .state("home", {
    url: "/",
    templateUrl: "js-angular/ng-views/home.html"
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
