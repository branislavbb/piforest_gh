angular.module('app')
  .controller('SeedController', ['$scope', '$state', 'Seed','SeedType',
   function($scope,$state,Seed, SeedType) {
    $scope.seeds = [];
    $scope.filters = { };
    $scope.editing = false;
    function getSeeds() {
      Seed
        .find()
        .$promise
        .then(function(results) {
          $scope.seeds = results;
          console.log($scope.seeds);
        });
    }
    getSeeds();
    function getSeedTypes() {
      SeedType
        .find()
        .$promise
        .then(function(results) {
          $scope.seedTypes = results;
          console.log($scope.seedTypes);
        });
    }
    getSeedTypes();

    $scope.addSeed = function() {
      Seed.create($scope.newSeed)
        .$promise
        .then(function(seed) {
            $scope.newSeed = '';
          getSeeds();
        });
    };

    $scope.removeSeed = function(item) {
      Seed
        .deleteById(item)
        .$promise
        .then(function() {
          getSeeds();
        });
    };
    $scope.updateSeed = function(item) {
      Seed.prototype$updateAttributes(item,function (seed){
        console.log(seed);
        seed = $scope.seed;
        getSeeds();
      });
    }

  }]);
