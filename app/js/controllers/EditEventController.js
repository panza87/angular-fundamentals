'use strict';

eventsApp.controller('EditEventController', function($scope) {
	$scope.saveEvent = function(event) {
		alert(event.name + ' works!')
	}
	$scope.cancelEdit = function() {
		window.location = "/EventDetails.html"
	}
});