angular.module('app')
  .controller('BerryController', ['$scope', '$state', 'Berry',
   function($scope,$state,Berry) {
    $scope.berries = [];
    $scope.filters = { };
    $scope.editing = false;
    function getBerries() {
      Berry
        .find().$promise.then(function(results) {
          $scope.berries = results;
        });
    }
    getBerries();
    $scope.addBerry = function() {
      Berry.create($scope.newBerry).$promise
        .then(function(berry) {
            $scope.newBerry = '';
          getBerries();
        });
    };


  }])
  .controller('BerryBuilderController', ['$scope', '$stateParams','$state', 'Berry', 'Seed','SeedType',
    function($scope,$stateParams,$state,Berry, Seed, SeedType){
      $scope.berry = Berry.find({
        filter: {
          where: {
            id: $stateParams.id
          }

        }
      }).$promise.then(function(result){
        $scope.berry = result;
      });
      function getSeedTypes() {
        SeedType
          .find().$promise.then(function(results) {
            $scope.seedTypes = results;
          });
      }
      getSeedTypes();
      function getSeeds() {
        Seed
        .find().$promise.then(function(results){
          $scope.seeds=results;
        });
      }
      getSeeds();
    }]);
