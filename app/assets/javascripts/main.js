requirejs.config({

	'paths': {
		'modules': 'modules',
		'jquery': 'vendor/jquery-2.1.4.min'
	}

});

requirejs([
	'jquery',
	'modules/steps'
]);