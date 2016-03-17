'use strict';

eventsApp.controller('EventController', function ($scope, eventData, $anchorScroll) {
	
	$scope.sortorder = 'name';
	$scope.event = eventData.getEvent();
	
	$scope.upVoteSession = function(session) {
		session.upVoteCount++;
	};
	
	$scope.downVoteSession = function(session) {
		session.upVoteCount--;
	};
	
	$scope.scrollToSession = function() {
		$anchorScroll();
	};
});