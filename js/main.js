/**
 * Created by Serge on 01.06.2017.
 */
var app = angular.module("keeper", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'boards.html'
        })
        .when('/:boardId', {
            templateUrl: 'board.html',
            controller: "boardCtrl as boardCtrl"
        })
        .otherwise({
            template: '<h1>404 Page not found</h1>'
        })
});