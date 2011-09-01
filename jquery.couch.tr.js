/**
 * @file jquery.couch.tr.js
 * @brief Wrapper for jquery.tr in CouchApps.
 * @author Jonathan Giroux (Bloutiouf)
 * @site https://github.com/Bloutiouf/jquery.couch.tr
 * @version 1.0
 * @license MIT license <http://www.opensource.org/licenses/MIT>
 * 
 * jquery.couch.tr is a jQuery plugin acting as a wrapper for jquery.tr in
 * CouchApps.
 */

(function($) {

	// configuration, feel free to edit the following lines

	/**
	 * Dictionary's field name inside the evently handlers' field.
	 * In the CouchApp's file system, it's a directory.
	 */
	var directory = '_languages';

	// end of configuration

	$.fn.tr = function(event) {
		return $.tr.translator($$(this).evently[directory]);
	};

})(jQuery);