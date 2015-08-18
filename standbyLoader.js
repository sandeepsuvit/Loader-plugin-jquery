/**
 * CUSTOMIZED STANDBY WIDGET FOR JQUERY
 * 
 * Created by ---------- Name - SANDEEP KANANGATT Email - sandeepsuvit@gmail.com
 * Website - www.dotedlabs.com Github -
 * https://github.com/sandeepsuvit/LoaderWidget-for-jQuery
 * 
 * This widget is a customized Standby loader plugin for jQuery.
 * 
 * This standby loader can be invoked in the following ways.
 * 
 * 
 * ----------------------------------------------------------------------------
 * How to use this widget:
 * ----------------------------------------------------------------------------
 * 1. $('body').showLoader(); -> Displays the loader with the default text
 * "Please wait...".
 * 
 * 2. $('body').hideLoader(); -> Hides the loader and defaults the loader text
 * to "Please wait...".
 * 
 */

(function($) {
	'use strict';
	var loader_text = "Please wait...";
	var loader_image = "ajaxLoader.gif";

	/**
	 * Function to show the loader on the reference element
	 */
	$.fn.showLoader = function() {
		var $regPoint = this;
		// Hide any scrolling element from the body
		$regPoint.addClass("standbyLoader-hide-scrolls-from-body");
		// Appending element
		$(
				'<div id="standbyLoader-overlay">'
						+ "<div id='standbyLoader-loading-text'>" + loader_text
						+ "</div>" + '</div>').appendTo($regPoint)
		return this;
	};

	/**
	 * Hide the loader that is attached to a reference element
	 */
	$.fn.hideLoader = function() {
		var $regPoint = this;
		// Hide any scrolling element from the body
		$regPoint.removeClass("standbyLoader-hide-scrolls-from-body");

		$("#standbyLoader-overlay").remove();
		return this;
	};

}(jQuery));