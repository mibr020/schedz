var mainApp = angular.module("mainApp", ['ui.router', 'ngMaterial']); //Add firebase

//var homeController = mainApp.controller('homeController', homeController);

//Body of code will be executed when app loads
mainApp.run(function($rootScope){
	//alert('potato');
});



mainApp.config(function($stateProvider, $urlRouterProvider) {
	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise("/state1");

	$stateProvider
		.state("state1", {
			url:"/state1",
			templateUrl: "partials/state1.html"
		});
});