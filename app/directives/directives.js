angular.module("mainApp").directive("editable", Editable);
//angular.module("mainApp").directive("focusMode", FocusMode);

function Editable() {
	return{
		restrict: 'E',
		replace: true,
		templateUrl: 'app/home/editable.html',
		link : function(scope, element, attrs){
			// find the input element
			// var staffInput = element.find('input');
			// // Listen for blur (out of focus) event
			// var tableCell = element.find('span.table-cell');
			// var latestEl;
			// tableCell.click(function(event){
			// 	//var test = $parse(attrs.focusMode);
			// 	var inp = $(event.target).next('input');
			// 	setTimeout(function() {
			// 		inp.focus();
			// 	}, 0);
			// });
			// staffInput.bind('blur', function(event){
			// 	event.preventDefault();
			// 	console.log(this);
			// 	console.log($(this));
			// 	// Since blur event occured outsude angular execution context
			// 	// we need to call scope.$apply to tell angularjs about changes
			// 	setTimeout(function() {
			// 		console.log(document.activeElement);
			// 		console.log($(document).activeElement);
			// 	}, 1);
			// 	scope.$apply(function() {
			// 		// Disable editMode
			// 		scope.editMode = false
			// 	});
			// 	//alert(latestEl.attr('class') == "table-cell ng-binding");
			// });
		}
	}
};

// function FocusMode() {
// 	return{
// 		restrict: 'A',
// 		replace: true,
// 		link: function(scope, element, attrs){
// 			scope.$watch(attrs.focusMode, function(value) {
// 				if (value == true){
// 					console.log("value = ", value);
// 					element[0].focus();
// 					console.log(scope[attrs.focusMode]);
// 					scope[attrs.focusMode] = false;
// 				}
// 			});
// 		}
// 	}
// };