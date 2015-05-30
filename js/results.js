function ResultsCtrl($scope, $http) {
  $scope.messageSentFlag = 'show';

  var gender   = '';
  var ageGroup = '';
  var raceYear = '';

  var results = [];
  var result = {};

  $scope.totalMessage = {};

  //
  // this function returns the top ten results
  //
  $scope.getTopTen = function() {

    if ($scope.gender == 'Male')
      $scope.totalMessage = 'Get top ten for males';
    else
      $scope.totalMessage = 'Get top ten for females';

    $scope.messageSentFlag = 'hide';
  };

  //
  // this function returns all results
  //
  $scope.getAllResults = function() {

    ageGroup = $scope.age;
    raceYear = $scope.raceYear;

    $scope.results = [];

    if (ageGroup == null)
      $scope.totalMessage = 'Please enter an age group';

    result.place = 1;
    result.fullName = 'Sanna Peterson';
    result.time = '8:22';

    $scope.results.push(result);

    result.place = 2;
    result.fullName = 'Kaya Peterson';
    result.time = '8:35';

    $scope.results.push(result);

  };

  //
}
