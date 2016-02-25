var mainApp = angular.module("mainApp", ["firebase", "ui.router"]);

//var homeController = mainApp.controller('homeController', homeController);


mainApp.config(function($stateProvider, $urlRouterProvider) {
	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise("/state1");

	$stateProvider
		.state("state1", {
			url:"/state1",
			templateUrl: "partials/state1.html"
		});
});