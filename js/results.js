function ResultsCtrl($scope, $http) {
  $scope.messageSentFlag = 'show';

  // this initializes when the browswer first renders

  var gender   = '';
  var ageGroup = '';
  var raceYear = '';

  var results = [];
  var result = {};

  $scope.totalMessage = '';
  $scope.findIndividual = false;
  $scope.showGroupResults = false;
  $scope.showRunnerResults = false;

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

  $http.get('/data/resultsGirls2011.json').success(function(data) {

    angular.forEach(data, function(result) {
      result.raceYear = '2011';
      result.gender = 'Female';
      results.push(result)
    });

  });

  $http.get('/data/resultsGirls2012.json').success(function(data) {

    angular.forEach(data, function(result) {
      result.raceYear = '2012';
      result.gender = 'Female';
      results.push(result)
    });

  });

  $http.get('/data/resultsGirls2013.json').success(function(data) {

    angular.forEach(data, function(result) {
      result.raceYear = '2013';
      result.gender = 'Female';
      results.push(result)
    });

  });

  $http.get('/data/resultsGirls2014.json').success(function(data) {

    angular.forEach(data, function(result) {
      result.raceYear = '2014';
      result.gender = 'Female';
      results.push(result)
    });

  });

  $scope.allResults = results;

  // 
  // this function is invoked when someone wants to enable the find individual feature
  //

  $scope.findIndividual = function() {

    $scope.findIndividual = true;
    $scope.showGroupResults = false;
  
  };

  //
  // this function finds runners based on search data
  //

  $scope.findRunnerResult = function() {

    $scope.results = [];

    searchName = $scope.searchName;

    results = $scope.allResults;

    angular.forEach(results, function(result) {
      runnerName = result.fullName;
      if (runnerName.search(searchName) > -1)
        $scope.results.push(result);
    });

    $scope.showRunnerResults = true;

  };

  //
  // this function returns the top ten results
  //
  $scope.getTopTen = function() {

    ageGroup = $scope.age;
    raceYear = $scope.raceYear;
    gender   = $scope.gender;

    $scope.totalMessage = '';
    $scope.results = [];

    // first validate that the right parameters were provided

    if (ageGroup == null)
      $scope.totalMessage = 'Please enter an age group';
    else if (raceYear == null)
      $scope.totalMessage = 'Please enter a race year';
    else if (gender == null)
      $scope.totalMessage = 'Please enter a gender';
    else
      {
       $scope.showGroupResults = true;

       // then parse through the data and provide the top ten for the given category

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

    // first validate that the fields were entered

    if (ageGroup == null)
      $scope.totalMessage = 'Please enter an age group';
    else if (raceYear == null)
      $scope.totalMessage = 'Please enter a race year';
    else if (gender == null)
      $scope.totalMessage = 'Please enter a gender';
    else
      {
         $scope.showGroupResults = true;

       // then parse through the array to find what data is matching
    
       results = $scope.allResults;
 
       angular.forEach(results, function(result) {
         if (result.ageGroup == ageGroup && result.raceYear == raceYear && result.gender == gender)
           $scope.results.push(result)
       });
      }
  };

  //
}
