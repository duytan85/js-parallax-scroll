/**
 * JavaScript parallax scroll widget
 * @author duytanhoang85@gmail.com (Duytan (Zee) Hoang)
 */

'use strict';

var JSwidget = JSwidget || {};

(function() {
	var ParallaxScroll = function(config) {
		
		// configurations
		this.config = config || {};
		this._scrollSpeed = this.config.scrollSpeed || 1;
		
		// window dimensions
		this._winWidth = window.innerWidth;
		this._winHeight = window.innerHeight;
		
		// parallax array
		this._parallaxArray = [
			// {
			// 	'parallaxContainer': {
			// 		'el': null,
			// 		'width': 0,
			// 		'height': 0,
			// 		'offsetTop': 0
			// 	},
			// 	'parallaxElement' : {
			// 		'el': null,
			// 		'width': 0,
			// 		'height': 0,
			// 		'xPos': 0,
			// 		'yPos': 0
			// 	}
			// }
		];
	};
	
	/**************************************
	UTILITY METHODS
	**************************************/

	/**************************************
	PRIVATE METHODS
	**************************************/
	
	// populate parallax array
	ParallaxScroll.prototype._setParallaxArray = function() {
		var parallaxContainerEl = document.getElementsByClassName('parallax-container');
		
		for (var i = 0, length = parallaxContainerEl.length; i < length; i++) {
			var parallaxEl = parallaxContainerEl[i].getElementsByClassName('parallax-element')[0];

			this._parallaxArray.push(
				{
					'parallaxContainer': {
						'el': parallaxContainerEl[i],
						'width': parallaxContainerEl[i].offsetWidth,
						'height': parallaxContainerEl[i].offsetHeight,
						'offsetTop': parallaxContainerEl[i].offsetTop
					},
					'parallaxElement': {
						'el': parallaxEl,
						'width': parallaxEl.width,
						'height': parallaxEl.height,
						'xPos': 0,
						'yPos': 0
					}
				}
			);
		}
	};
	
	// set parallax element dimensions
	ParallaxScroll.prototype._setElDimensions = function() {
		for (var i = 0, length = this._parallaxArray.length; i < length; i++) {
			this._parallaxArray[i].parallaxElement.width = this._winWidth;
			this._parallaxArray[i].parallaxElement.height = 'auto';
			
			this._parallaxArray[i].parallaxElement.el.style.width = this._parallaxArray[i].parallaxElement.width + 'px';
			this._parallaxArray[i].parallaxElement.el.style.height = this._parallaxArray[i].parallaxElement.height;
			
			if (this._parallaxArray[i].parallaxElement.height <= this._winHeight) {
				this._parallaxArray[i].parallaxElement.el.style.width = 'auto';
				this._parallaxArray[i].parallaxElement.el.style.height = this._winHeight;
			}
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
		this._setParallaxArray();
		this._setElDimensions();
		
		// get parallax information for each parallax container & put into object
			// parallax container position top
			// get parallax element
			// get parallax element dimensions
			// set parallax element x position
			// set parallax element y position
			
		// get window scroll position
		
		// set parallax scroll position
		
		// bind scroll event handler
		
	};
	
	// stop parallax scroll
	
	/**************************************
	NAMESPACE
	**************************************/
	JSwidget.ParallaxScroll = ParallaxScroll;
})();

// (function() {
// 	var parallaxScroll = new JSwidget.ParallaxScroll({
//         scrollSpeed: 2
//     });
    
// 	parallaxScroll.startParallaxScroll();
// })();