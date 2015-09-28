/**
 * Social module
 * 
 * Supports writing in the dynamic content for friends also 
 * in certain baby steps
 */
window.daveCodeTest = (function($, module)
{
	module.social = {};

	// ---------- PRIVATE PROPERTIES

	/** 
	 * Identifies the file that contains the data for baby step social
	 * @var string _socialDataFile
	 */
	var _socialDataFile = '/baby-steps.json';

	// ---------- PRIVATE METHODS

	/**
	 * Will write out a message on a baby step, showing the friends 
	 * that are also in that step.
	 * 
	 * @param number stepNum The baby step number, 1-7
	 * @param array friendNames An array of full names to be listed
	 * @return void
	 */
	var _showFriendsForStep = function(stepNum, friendNames)
	{
		if(typeof friendNames !== 'object' || typeof friendNames.length === 'undefined')
			return;

		var msg, 
			joiner, 
			friendNamesLinked = _batchNameLink(_sortNames(friendNames));

		// --- {friend} is also in Baby Step {n}
		if(friendNames.length === 1)
			msg = friendNamesLinked[0] + ' is ';
		// --- {friend} and {friend} are also in Baby Step {n}
		else if(friendNames.length === 2)
			msg = friendNamesLinked.join(' and ') + ' are ';
		// --- {friend}, {friend}, and {n} other friend{s} are also in Baby Step {n}
		else if(friendNames.length > 2)
		{
			msg = [friendNamesLinked[0], friendNamesLinked[1]].join(', ');
			msg += ', and ' + (friendNames.length - 2) + ' other friend' + (friendNames.length > 3 ? 's' : '') + ' are ';
		}
		else
			return;

		msg += ' also in Baby Step ' + stepNum;

		module.elements.getStep(stepNum).find('[data-friends]').html(msg).show();
	};

	// ---

	/**
	 * Will take an array of names, and call the _nameLink() 
	 * method for each, returning an array of link-wrapped names.
	 * 
	 * @param array names A multi-dimensional array of first and last name
	 * @return array
	 */
	var _batchNameLink = function(names)
	{
		var wrapped = [];

		for(var i = 0; i < names.length; i++)
			wrapped.push(_nameLink(names[i]));

		return wrapped;
	};

	// ---

	/**
	 * Wraps a name in a hyperlink
	 * 
	 * @param array name An array of first and last name
	 * @return string
	 */
	var _nameLink = function(name)
	{
		return '<a href="#">' + name[0] + ' ' + name[1] + '</a>';
	};

	// ---

	/**
	 * Will accept an array of unsorted names, and return a sorted array
	 * 
	 * @param array names
	 * @return array
	 */
	var _sortNames = function(names)
	{
		var sorted = names.sort(function(a, b)
		{
			return a[1].localeCompare(b[1]);
		});

		return sorted;
	};

	// ---------- PUBLIC METHODS

	/** 
	 * Load in the data for friends and what step they're on. Write in 
	 * messages to show the social message.
	 * 
	 * @param void
	 * @return void
	 */
	module.social.init = function()
	{
		$.get(_socialDataFile, function(data)
		{
			if(typeof data === 'object' && typeof data.friends === 'object')
			{
				var _socialSteps = {},
					_socialStepMsg;

				// --- build an array of names, indexed by the baby step number
				$.each(data.friends, function(i, friend)
				{
					_socialSteps[friend.babyStep] = _socialSteps[friend.babyStep] || [];

					_socialSteps[friend.babyStep].push([friend.firstName, friend.lastName]);
				});

				// --- now call the "show" method for each step for which we have folks
				$.each(_socialSteps, _showFriendsForStep);
			}
		});
	};

	// ---

	return module;

})(jQuery, window.daveCodeTest || {});