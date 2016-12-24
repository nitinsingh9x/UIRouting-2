(function(){

    angular
        .module('app')
        .config(appConfig);

        appConfig.$inject = ['$stateProvider','$urlRouterProvider']
        function appConfig($stateProvider,$urlRouterProvider){

            $urlRouterProvider.otherwise('/home');

            $stateProvider

            .state('root',{
                abstract:true,
                views:{
                    '@':{
                        templateUrl:'../app/layout.html'
                    },
                    'navbar@root':{
                        templateUrl:'../app/navbar.html'
                    },
                    'content@root':{
                        templateUrl:'../app/content.html'
                    }
                    ,
                    'footer@root':{
                        templateUrl:'../app/footer.html'
                    }
                }
            })
            .state('root.home',{
                url:'/home'
                ,templateUrl:'../app/home.tpl.html'
            })
            .state('root.about',{
                url:'/about',
                templateUrl:'../app/about.tpl.html'
            })

        }
})();