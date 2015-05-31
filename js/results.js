function ResultsCtrl($scope, $http) {
  $scope.messageSentFlag = 'show';

  // this initializes when the browswer first renders

  var gender   = '';
  var ageGroup = '';
  var raceYear = '';

  var results = [];
  var result = {};

  $scope.totalMessage = '';

  // get results data from webserver and load it into an array
  // these files are separate for gender and race year

  $http.get('/data/resultsGirls2009.json').success(function(data) {

    angular.forEach(data, function(result) {
      result.raceYear = '2009';
      result.gender = 'Female';
      results.push(result)
    });

  });

  $http.get('/data/resultsBoys2009.json').success(function(data) {

    angular.forEach(data, function(result) {
      result.raceYear = '2009';
      result.gender = 'Male';
      results.push(result)
    });

  });

  $http.get('/data/resultsGirls2010.json').success(function(data) {

    angular.forEach(data, function(result) {
      result.raceYear = '2010';
      result.gender = 'Female';
      results.push(result)
    });

  });

  $scope.allResults = results;

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
         if (result.topTen && result.ageGroup == ageGroup && result.raceYear == raceYear && result.gender == gender)
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
      {
       results = $scope.allResults;
 
       angular.forEach(results, function(result) {
         if (result.ageGroup == ageGroup && result.raceYear == raceYear && result.gender == gender)
           $scope.results.push(result)
       });
      }
  };

  //
}
