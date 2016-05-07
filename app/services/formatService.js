angular.module("mainApp").service("FormatService", FormatService);

FormatService.$inject = ['$q'];


function FormatService($q) {
	var defer = $q.defer(),
		validDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "mon", "tues", "wed", "thurs", "fri", "sat", "sun"];
	//this.separators = [/:|\s*-\s*|\.|\s*to\s*|from\s/]
	this.keywords = {
		definedTerms: ['morning', 'afternoon', 'evening','night'],
		definedTimes: ['6:00 - 11:00', '12:00 - 3:00', '4:00 - 6:00', '7:00 - 9:00'],
		keyword: ['now', 'till', 'after', 'copy', "all day"]
	}
	this.separators = {
		//expects 1-2 digits, 0 to many . or :(greedy), 0 to many digit, o to many character(s) that's not a digit, one or two digits
		hours: /(\d{1,2})[.:]*[0-9]*[^\d]*(\d{1,2})[:.]*[0-9]*/,
		mins: /\d{1,2}[\.:]*(\d{2})*\s[^\s]+\s\d{1,2}[\.:]*(\d{2})*/,
		keyword: /([^\d]*|[^ ]*)/,
		shiftDays : /([a-zA-Z]*)\s*[-to]{1,2}\s*([a-zA-Z]*)\s*.*/,
		shiftHours : /[^\d]*(\d{1,2})[.:]*(\d{1,2})*[^\d]*(\d{1,2})[.:]*(\d{1,2})*/
	}

	this.parseInput = function(value, staffShift){
		var parseData = {
			hours : value.replace(this.separators.hours, '$1,$2').split(','),
			mins : value.replace(this.separators.mins, '$1,$2').split(','),
			keyword : value.replace(this.separators.keyword, '$1'),
			shift : {
				days: staffShift.replace(this.separators.shiftDays, '$1,$2').split(','),
				hours: staffShift.replace(this.separators.shiftHours, '$1,$2,$3,$4').split(',')
			}
		};	
		//console.log(value.split(new RegExp(this.separators, 'gi')));
		console.log('Hours: ', parseData.hours);
		console.log('Mins: ',parseData.mins)
		console.log('keyword: ', parseData.keyword);
		console.log('Shift days: ', parseData.shift.days);
		console.log('Shift hours: ', parseData.shift.hours);

		var results = this.validateInput(parseData)

		
		return results	
	}

	this.validateInput = function(parseData){
		var	results = {
				time: [],
				timeOfDay: "",
				className: ""
			},
			error = "",
			index = this.keywords.definedTerms.indexOf(parseData.keyword.toLowerCase());
		if ( index !== -1){ // True means it does exist
			results.timeOfDay = parseData.keyword.toLowerCase();
			results.time = this.keywords.definedTimes[index];
			results.className = '$' + results.timeOfDay
			return results;
		}
		try{
			var staffHours = parseData.shift.hours;
			for(x in parseData.hours){
				var timeFormater = parseData.hours[x]%12;
				console.log(Number(parseData.shift.hours[0]+parseData.shift.hours[1]))
				console.log(timeFormater)
				if(timeFormater == parseData.hours[x]){//Time is in AM
					results.time.push(timeFormater)
				} else if(timeFormater == 0){ // Time is 12PM or AM
					results.time.push(12);
				} else{ // Time is in PM
					results.time.push(timeFormater)
				}
				//results.time += ':' + mins[x] + 
				results.time.push(parseData.mins[x])
			}
			console.log("result.time :",results.time)
		}catch(err){
			console.log(err)
		}
		// if(Number(parseData.hours[0])){
		// 	for(x in parseData.hours){
		// 		var timeFormater = parseData.hours[x]%12;
		// 		if(timeFormater == parseData.hours[x]){//Time is in AM
		// 			results.time.push(timeFormater)
		// 		} else if(timeFormater == 0){ // Time is 12PM or AM
		// 			results.time.push(12);
		// 		} else{ // Time is in PM
		// 			results.time.push(timeFormater)
		// 		}
		// 		//results.time += ':' + mins[x] + 
		// 		results.time.push(parseData.mins[x])
		// 	}
		// 	console.log("result.time :",results.time)

		// 	// Check to see if a remainder has been applied 
		// }
	}
}
