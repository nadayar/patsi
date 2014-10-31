'use strict';

//Setting up route
angular.module('patients').config(['$stateProvider',
	function($stateProvider) {
		// Patients state routing
		$stateProvider.
		state('listPatients', {
			url: '/patients',
			templateUrl: 'modules/patients/views/list-patients.client.view.html'
		}).
		state('createPatient', {
			url: '/patients/create',
			templateUrl: 'modules/patients/views/create-patient.client.view.html'
		}).
		state('viewPatient', {
			url: '/patients/:patientId',
			templateUrl: 'modules/patients/views/view-patient.client.view.html'
		}).
		state('editPatient', {
			url: '/patients/:patientId/edit',
			templateUrl: 'modules/patients/views/edit-patient.client.view.html'
<<<<<<< HEAD
		}).
		state('donatePatient', {
=======
		}).state('donatePatient', {
>>>>>>> cac44e38445bac88dcab4084c7922f54de3c63ed
			url: '/patients/:patientId/donate',
			templateUrl: 'modules/patients/views/donate-patient.client.view.html'
		});
	}
]);