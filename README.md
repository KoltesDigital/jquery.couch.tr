jquery.couch.tr
===============

jquery.couch.tr is a [jQuery](http://jquery.com/) plugin acting as a wrapper for jquery.tr in [CouchApps](https://github.com/couchapp/couchapp).

See the related [jquery.tr](https://github.com/Bloutiouf/jquery.tr) project.

Usage
-----

Add a directory `_languages` inside your `evently/widget` directory. This new directory shall contains the translation files.

Translation files may be simple JSON for easy cases. They must contain an object, with the original sentence or string id as key, and the translated sentence as value.

If the translated texts need to be generated according to given parameters, then the file should be a JS function, which returns an object in the same format as previously. It may be easier to writer helper functions to handle language specific grammar rules:

`en.js`:

```javascript
function() {
	function plural(singular, plural) {
		return function(n) {
			(n == 1) ? singular : plural;
		}
	}
	
	return {
		'You have &1 mail(s).' : plural('You have &1 mail.', 'You have &1 mails.')
	}
}
```

Example
--------

The example given is the default CouchApp given by `couchapp generate`, modified to use translations.

It also uses jQote2 as template engine, which is available with [my fork of couchapp](https://github.com/Bloutiouf/couchapp) (not maintained).
 
Misc
----

Licensed under a MIT license, see the [LICENSE file](https://github.com/Bloutiouf/jquery.couch.tr/blob/master/LICENSE).

Official site: https://github.com/Bloutiouf/jquery.couch.tr