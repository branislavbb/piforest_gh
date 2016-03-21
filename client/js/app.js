angular //refactor into seperate app/route modules
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('todo', {
        url: '/todo',
        templateUrl: 'views/todo.html',
        controller: 'TodoController'
      })
      .state('seed', {
        url: '/seed',
        templateUrl: 'views/seed.html',
        controller: 'SeedController'
      })

      .state('berries',{
        url:'/berries',
        templateUrl: 'views/berries.html',
        
      })
      .state('berry',{
        url:'/berries/{id}',
        templateUrl:'views/berry.html'
      });

    $urlRouterProvider.otherwise('todo');
  }]);
