'use strict';

eventsApp.directive('mySample', function() {
	return {
		restrict: 'E',
		template: "<input type='text' ng-model='sampleData' />{{ sampleData }}<br/>",
		scope: {
			
		}
	};
});