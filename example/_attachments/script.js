var path = location.pathname.split('/');
var database = path[1];
var design = path[3];

var db = null;
var userCtx = null;

$(function() {
	db = $.couch.db(database);

	var defaultLanguage = 'en';
	$.tr.language(defaultLanguage, true);
	
	$.couch.app(function(app) {
		$('#account').evently('account', app);
		$('#profile').evently('profile', app);
		$.evently.connect('#account', '#profile', ['loggedIn', 'loggedOut']);
	});
	
	// ...
	
	var languageSelect = $('#languagechange > select');
	
	languageSelect.change(function() {
		$.tr.language($(this).val());
		$('#account').trigger('_init');
		$('#profile').trigger('_init');
	});
	
	var currentLanguage = $.tr.language();
	if (currentLanguage != defaultLanguage) {
		languageSelect.val(currentLanguage);
		languageSelect.change();
	}
});