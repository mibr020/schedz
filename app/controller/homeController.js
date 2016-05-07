angular.module('mainApp').controller('homeController', homeController);

homeController.$inject = ['$scope', 'FormatService']; // Add $firebaseObject

function homeController($scope, FormatService) { //Add $firebaseObject


	//var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");
	// download the data into a local object
	//asynchronous call to remote service
	//So will take time to download
	//$scope.data = $firebaseObject(ref);

	$scope.days = [" ","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

	$scope.colorForTerm = {
		morning: '#FED1AE',
		afternoon: '#C6E4EE',
		evening: '#FAA0B9',
		night: '#757ECB'
	}

	$scope.example = [
	{
		id : "1",
		data : ["Mazin","Power Hour", "Out of office", "Open Queue", "Table Tennis", "Breakfast", "Unassigned", "Day Off"],
		timeSlot : ["12:30 - 1:00", "12:30 - 1:00", "12.30 to 4.00", "1230 to 1", "one to two", "Afternoon", "12 till 2 this week", "now till 3"],
		workShift: ["Tues-Sat 12:00-21:00", "Mon-Fri 12:00 - 13:00"],
		timeOfDay : ["", $scope.colorForTerm.afternoon, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.evening ],
		deleted: null
	}
	];

	$scope.aucklandRows = [
	{
		id : "1",
		data : ["Mazin","Power Hour", "Out of office", "Open Queue", "Table Tennis", "Breakfast", "Unassigned", "Day Off"],
		timeSlot : ["Mon-Fri 12:00 - 13:00", "12:30 - 1:00", "12.30 to 4.00", "1230 to 1", "one to two", "Afternoon", "12 till 2 this week", "now till 3"],
		timeOfDay : ["", $scope.colorForTerm.afternoon, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.evening ],
		deleted: null
	},
	{
		id : "2",
		data : ["Roberto","Team leading","Eating tacos","Table Tennis","Meeting","Unassigned","WFH","Day off"],
		timeSlot : ["Mon-Fri 8:30-4:00", "12:30 - 1:00", "12.30 to 4.00", "1230 to 1", "one to two", "Afternoon", "12 till 2 this week", "now till 3"],
		timeOfDay : ["", $scope.colorForTerm.afternoon, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.evening ],
		deleted: null
	},
	{
		id : "3",
		data : ["Sean","On Call", "Out of office", "Open Queue", "Table Tennis", "Breakfast", "Unassigned", "Day Off"],
		timeSlot : ["Mon-Fri 8:30-4:00", "12:30 - 1:00", "12.30 to 4.00", "1230 to 1", "one to two", "Afternoon", "12 till 2 this week", "now till 3"],
		timeOfDay : ["", $scope.colorForTerm.afternoon, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.evening ],
		deleted: null
	},
	{
		id : "4",
		data : ["Greg L","Power Hour", "Escalations", "Escalations", "Escalations", "Escalations", "Power Hour", "Day Off"],
		timeSlot : ["Mon-Fri 8:30-4", "12:30 - 1:00", "12.30 to 4.00", "1230 to 1", "one to two", "Afternoon", "12 till 2 this week", "now till 3"],
		timeOfDay : ["", $scope.colorForTerm.afternoon, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.evening ],
		deleted: null
	},
	{
		id : "5",
		data : ["Greg D","Day off", "Out of office", "Open Queue", "Table Tennis", "Breakfast", "Unassigned", "Day Off"],
		timeSlot : ["Tues-Sat 12:30-21:00", "12:30 - 1:00", "12.30 to 4.00", "1230 to 1", "one to two", "Afternoon", "12 till 2 this week", "now till 3"],
		timeOfDay : ["", $scope.colorForTerm.afternoon, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.evening ],
		deleted: null
	},
	{
		id : "6",
		data : ["Cam","On Call", "Out of office", "Open Queue", "Table Tennis", "Breakfast", "Unassigned", "Day Off"],
		timeSlot : ["Tues-Sat 10:30-19:00", "12:30 - 1:00", "12.30 to 4.00", "1230 to 1", "one to two", "Afternoon", "12 till 2 this week", "now till 3"],
		timeOfDay : ["", $scope.colorForTerm.afternoon, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.evening ],
		deleted: null
	},
	{
		id : "7",
		data : ["Sumeet","On Call", "Out of office", "Open Queue", "Table Tennis", "Breakfast", "Unassigned", "Day Off"],
		timeSlot : ["Tues-Sat 12:30-21:00", "12:30 - 1:00", "12.30 to 4.00", "1230 to 1", "one to two", "Afternoon", "12 till 2 this week", "now till 3"],
		timeOfDay : ["", $scope.colorForTerm.afternoon, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.evening ],
		deleted: null
	},
	{
		id : "8",
		data : ["Adam","On Call", "Out of office", "Open Queue", "Table Tennis", "Breakfast", "Unassigned", "Day Off"],
		timeSlot : ["Mon-Fri 10:30-7:00", "12:30 - 1:00", "12.30 to 4.00", "1230 to 1", "one to two", "Afternoon", "12 till 2 this week", "now till 3"],
		timeOfDay : ["", $scope.colorForTerm.afternoon, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.evening ],
		deleted: null
	},
	{
		id : "9",
		data : ["Ben P","On Call", "Out of office", "Open Queue", "Table Tennis", "Breakfast", "Unassigned", "Day Off"],
		timeSlot : ["Sun-Thurs 10:30-19:00", "12:30 - 1:00", "12.30 to 4.00", "1230 to 1", "one to two", "Afternoon", "12 till 2 this week", "now till 3"],
		timeOfDay : ["", $scope.colorForTerm.afternoon, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.evening ],
		deleted: null
	},
	{
		id : "10",
		data : ["Ben L","On Call", "Out of office", "Open Queue", "Table Tennis", "Breakfast", "Unassigned", "Day Off"],
		timeSlot : ["Tues-Sat 10-21", "12:30 - 1:00", "12.30 to 4.00", "1230 to 1", "one to two", "Afternoon", "12 till 2 this week", "now till 3"],
		timeOfDay : ["", $scope.colorForTerm.afternoon, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.evening ],
		deleted: null
	},
	{
		id : "11",
		data : ["Dave","On Call", "Out of office", "Open Queue", "Table Tennis", "Breakfast", "Unassigned", "Day Off"],
		timeSlot : ["Sun-Thurs 10:30-19:00", "12:30 - 1:00", "12.30 to 4.00", "1230 to 1", "one to two", "Afternoon", "12 till 2 this week", "now till 3"],
		timeOfDay : ["", $scope.colorForTerm.afternoon, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.evening ],
		deleted: null
	}
	];

	$scope.torontoRows = [
	{
		id : "1",
		data : ["Will","On Call", "Out of office", "Open Queue", "Table Tennis", "Breakfast", "Unassigned", "Day Off"],
		timeSlot : ["Tues-Sat 12:00-21:00", "12:30 - 1:00", "12.30 to 4.00", "1230 to 1", "one to two", "Afternoon", "12 till 2 this week", "now till 3"],
		timeOfDay : ["", $scope.colorForTerm.afternoon, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.evening ],
		deleted: null
	},
	{
		id : "2",
		data : ["Roberto","Team leading","Eating tacos","Table Tennis","Meeting","Unassigned","WFH","Day off"],
		timeSlot : ["Mon-Fri 8:30-4:00", "12:30 - 1:00", "12.30 to 4.00", "1230 to 1", "one to two", "Afternoon", "12 till 2 this week", "now till 3"],
		timeOfDay : ["", $scope.colorForTerm.afternoon, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.evening ],
		deleted: null
	},
	{
		id : "3",
		data : ["Sean","On Call", "Out of office", "Open Queue", "Table Tennis", "Breakfast", "Unassigned", "Day Off"],
		timeSlot : ["Mon-Fri 8:30-4:00", "12:30 - 1:00", "12.30 to 4.00", "1230 to 1", "one to two", "Afternoon", "12 till 2 this week", "now till 3"],
		timeOfDay : ["", $scope.colorForTerm.afternoon, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.evening ],
		deleted: null
	},
	{
		id : "4",
		data : ["Greg L","On Call", "Out of office", "Open Queue", "Table Tennis", "Breakfast", "Unassigned", "Day Off"],
		timeSlot : ["Mon-Fri 8:30-4", "12:30 - 1:00", "12.30 to 4.00", "1230 to 1", "one to two", "Afternoon", "12 till 2 this week", "now till 3"],
		timeOfDay : ["", $scope.colorForTerm.afternoon, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.evening ],
		deleted: null
	},
	{
		id : "5",
		data : ["Greg D","On Call", "Out of office", "Open Queue", "Table Tennis", "Breakfast", "Unassigned", "Day Off"],
		timeSlot : ["Tues-Sat 12:30-21:00", "12:30 - 1:00", "12.30 to 4.00", "1230 to 1", "one to two", "Afternoon", "12 till 2 this week", "now till 3"],
		timeOfDay : ["", $scope.colorForTerm.afternoon, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.evening ],
		deleted: null
	},
	{
		id : "6",
		data : ["Cam","On Call", "Out of office", "Open Queue", "Table Tennis", "Breakfast", "Unassigned", "Day Off"],
		timeSlot : ["Tues-Sat 10:30-19:00", "12:30 - 1:00", "12.30 to 4.00", "1230 to 1", "one to two", "Afternoon", "12 till 2 this week", "now till 3"],
		timeOfDay : ["", $scope.colorForTerm.afternoon, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.evening ],
		deleted: null
	}
	];

	$scope.londonRows = [
	{
		id : "1",
		data : ["Pete","On Call", "Out of office", "Open Queue", "Table Tennis", "Breakfast", "Unassigned", "Day Off"],
		timeSlot : ["Tues-Sat 12:00-21:00", "12:30 - 1:00", "12.30 to 4.00", "1230 to 1", "one to two", "Afternoon", "12 till 2 this week", "now till 3"],
		timeOfDay : ["", $scope.colorForTerm.afternoon, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.evening ],
		deleted: null
	},
	{
		id : "2",
		data : ["Anna","Team leading","Eating tacos","Table Tennis","Meeting","Unassigned","WFH","Day off"],
		timeSlot : ["Mon-Fri 8:30-4:00", "12:30 - 1:00", "12.30 to 4.00", "1230 to 1", "one to two", "Afternoon", "12 till 2 this week", "now till 3"],
		timeOfDay : ["", $scope.colorForTerm.afternoon, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.evening ],
		deleted: null
	},
	{
		id : "3",
		data : ["Sean","On Call", "Out of office", "Open Queue", "Table Tennis", "Breakfast", "Unassigned", "Day Off"],
		timeSlot : ["Mon-Fri 8:30-4:00", "12:30 - 1:00", "12.30 to 4.00", "1230 to 1", "one to two", "Afternoon", "12 till 2 this week", "now till 3"],
		timeOfDay : ["", $scope.colorForTerm.afternoon, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.evening ],
		deleted: null
	},
	{
		id : "4",
		data : ["Greg L","On Call", "Out of office", "Open Queue", "Table Tennis", "Breakfast", "Unassigned", "Day Off"],
		timeSlot : ["Mon-Fri 8:30-4", "12:30 - 1:00", "12.30 to 4.00", "1230 to 1", "one to two", "Afternoon", "12 till 2 this week", "now till 3"],
		timeOfDay : ["", $scope.colorForTerm.afternoon, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.evening ],
		deleted: null
	},
	{
		id : "5",
		data : ["Greg D","On Call", "Out of office", "Open Queue", "Table Tennis", "Breakfast", "Unassigned", "Day Off"],
		timeSlot : ["Tues-Sat 12:30-21:00", "12:30 - 1:00", "12.30 to 4.00", "1230 to 1", "one to two", "Afternoon", "12 till 2 this week", "now till 3"],
		timeOfDay : ["", $scope.colorForTerm.afternoon, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.night, $scope.colorForTerm.morning, $scope.colorForTerm.evening ],
		deleted: null
	}
	];

	$scope.updatedRows = angular.copy($scope.rows)

	$scope.format = {
		'morning': [6-12],
		'afternoon': [12-4, 12-16],
		'night': [4-9, 16-21]
	}

	

	$scope.setColor = function(input){
		console.log(input)
		return {
			color: 'green'
		}
	}

	$scope.formatTimeSlot = function(value, row, cellIndex){
		if (row.timeSlot == undefined){
			alert("Please fill staff hours")
			return
		}
		var results = FormatService.parseInput(value, row.timeSlot[0]);
		console.log("results :", results)
		//row.timeSlot[cellIndex] = results.time
	}

	$scope.inputCommand = function(inputValue){
		console.log(inputValue);
	}

	$scope.updateTable = function(user, row){
		console.log($scope.updatedRows[1])
		$scope.updatedRows = angular.copy($scope.rows)
		//$scope.updatedRows[row.id-1] = row
		console.log($scope.updatedRows)
		//console.log($scope.updatedRows)
	};


};