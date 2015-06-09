/**
 * JavaScript parallax scroll widget
 * @author duytanhoang85@gmail.com (Duytan (Zee) Hoang)
 */

'use strict';

var JSwidget = JSwidget || {};

(function() {
	var ParallaxScroll = function(selector) {
		this._selector = selector;
		this._winWidth = 0;
		this._winHeight = 0;
	};
	
	/**************************************
	UTILITY METHODS
	**************************************/
	
	/**************************************
	PRIVATE METHODS
	**************************************/
	
	/**************************************
	ON EVENT METHODS
	**************************************/
	
	/**************************************
	EVENT HANDLER METHODS
	**************************************/
	
	/**************************************
	PUBLIC METHODS
	**************************************/
	
	// start parallax scroll
		// get window dimensions
		// set parallax container dimensions
		// set parallax image dimensions
		// bind scroll event handler
		
	// stop parallax scroll
	
	/**************************************
	NAMESPACE
	**************************************/
	JSwidget.ParallaxScroll = ParallaxScroll;
})();

// (function() {
// 	var parallaxScroll = new JSwidget.ParallaxScroll('selector');
// 	console.log('parallaxScroll: ', parallaxScroll);
// })();