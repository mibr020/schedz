angular.module('mainApp').controller('homeController', homeController);

function homeController($scope) {

	$scope.days = [" ","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

	$scope.rows = [
	{
		id : "1",
		data : ["Mazin","a", "k", "o", "u"]
	},
	{
		id : "2",
		data : ["Roberto","","","","","","",""]
	}
	];

	$scope.editMode = false;
	$scope.focusMode = false;
};