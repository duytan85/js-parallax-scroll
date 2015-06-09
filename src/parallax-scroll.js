/**
 * JavaScript parallax scroll widget
 * @author duytanhoang85@gmail.com (Duytan (Zee) Hoang)
 */

'use strict';

var JSwidget = JSwidget || {};

(function() {
	var ParallaxScroll = function(selector, config) {
		this._selector = selector;
		this.config = config || {};
		
		// config options
		this._scrollSpeed = this.config.scrollSpeed || 1;
		
		this._winWidth = window.innerWidth;
		this._winHeight = window.innerHeight;
		
		this._parallaxContainerEl = document.getElementsByClassName('parallax-container');
		this._parallaxEl = null;
	};
	
	/**************************************
	UTILITY METHODS
	**************************************/

	/**************************************
	PRIVATE METHODS
	**************************************/
	
	// set parallax image dimensions
	ParallaxScroll.prototype._setParallaxImgDimensions = function() {
		for (var i=0, length = this._parallaxContainerEl.length; i < length; i++) {
			var parallaxEl = this._parallaxContainerEl[i].getElementsByClassName('parallax-element')[0];
			
			// this._parallaxEl.style.width = this._winWidth + 'px';
			// this._parallaxEl.style.height = 'auto';
			
			console.log(this._parallaxContainerEl[i].offsetHeight);
			
			console.log(parallaxEl);
            if (parallaxEl.offsetHeight <= this._winHeight) {
				parallaxEl.style.width = 'auto';
				parallaxEl.style.height = this._winHeight + 'px';
            } else {
				parallaxEl.style.width = this._winWidth + 'px';
				parallaxEl.style.height = 'auto';
			}
			console.log(parallaxEl.style.cssText);
		}
	};
	
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
	ParallaxScroll.prototype.startParallaxScroll = function() {
		this._setParallaxImgDimensions();	// set parallax image dimensions
		
		// bind scroll event handler
	};
	
	// stop parallax scroll
	
	/**************************************
	NAMESPACE
	**************************************/
	JSwidget.ParallaxScroll = ParallaxScroll;
})();