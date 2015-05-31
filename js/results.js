function ResultsCtrl($scope, $http) {
  $scope.messageSentFlag = 'show';

  // this initializes when the browswer first renders

  var gender   = '';
  var ageGroup = '';
  var raceYear = '';

  var results = [];
  var result = {};

  $scope.totalMessage = '';

  // get results from webserver

  $http.get('/data/resultsGirls2009.json').success(function(data) {
    $scope.allResults = data;
  });

  //
  // this function returns the top ten results
  //
  $scope.getTopTen = function() {

    ageGroup = $scope.age;
    raceYear = $scope.raceYear;
    gender   = $scope.gender;

    $scope.totalMessage = '';
    $scope.results = [];

    if (ageGroup == null)
      $scope.totalMessage = 'Please enter an age group';
    else if (raceYear == null)
      $scope.totalMessage = 'Please enter a race year';
    else if (gender == null)
      $scope.totalMessage = 'Please enter a gender';
    else
      {
       results = $scope.allResults;

       angular.forEach(results, function(result) {
         if (result.topTen)
           $scope.results.push(result)
       });
      }
  };

  //
  // this function returns all results
  //
  $scope.getAllResults = function() {

    ageGroup = $scope.age;
    raceYear = $scope.raceYear;
    gender   = $scope.gender;

    $scope.totalMessage = '';
    $scope.results = [];

    if (ageGroup == null)
      $scope.totalMessage = 'Please enter an age group';
    else if (raceYear == null)
      $scope.totalMessage = 'Please enter a race year';
    else if (gender == null)
      $scope.totalMessage = 'Please enter a gender';
    else
      $scope.results = $scope.allResults;
  };

  //
}
