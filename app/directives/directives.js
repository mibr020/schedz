angular.module("mainApp").directive("editable", Editable);
angular.module("mainApp").directive("focusMode", FocusMode);

function Editable($parse) {
	return{
		restrict: 'E',
		replace: true,
		templateUrl: 'app/home/editable.html',
		link : function(scope, element, attrs){
			// find the input element
			var staffInput = element.find('input');
			// Listen for blur (out of focus) event
			var tableCell = element.find('span.table-cell');
			var latestEl;
			tableCell.click(function(event){
				var test = $parse(attrs.focusMode);
				var inp = $(event.target).next('input');
				inp.focus();
				console.log(test);
			});
			/*staffInput.bind('blur', function(event){
				event.preventDefault();
				// Since blur event occured outsude angular execution context
				// we need to call scope.$apply to tell angularjs about changes
				scope.$apply(function() {
					// Disable editMode
					scope.editMode = false
				});
				//alert(latestEl.attr('class') == "table-cell ng-binding");
			});*/
		}
	}
};