'use strict';

(function() {
    describe('Parallax scroll setup: ', function() {
        var parallaxScroll = null;
        
        beforeEach(function(){
            document.body.innerHTML = parallaxScrollHTML;
            parallaxScroll = new JSwidget.ParallaxScroll({
                scrollSpeed: 2
            });
        });

        afterEach(function() {
            var parallaxScroll = null;
        });
        
        it('Get configuration options', function() {
            assert.strictEqual(parallaxScroll._scrollSpeed, 2, 'scroll speed is 2');
        });
        
        it('Get window dimensions', function() {
            assert.isAbove(parallaxScroll._winWidth, 0, 'window width is larger than 0');
            assert.isAbove(parallaxScroll._winHeight, 0, 'window height is larger than 0');
        });
        
        it('Check parallax array', function() {
            assert.isArray(parallaxScroll._parallaxArray, '_parallaxArray is an array');
        });
        
    });
})();