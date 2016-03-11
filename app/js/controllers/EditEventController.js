'use strict';

eventsApp.controller('EditEventController', function($scope) {
	$scope.saveEvent = function(event, newEventForm) {
		if(newEventForm.$valid) {
			alert(event.name + ' works!')
		}
	}
	$scope.cancelEdit = function() {
		window.location = "/EventDetails.html"
	}
});