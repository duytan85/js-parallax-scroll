'use strict';

(function() {
    describe('Start parallax scroll: ', function() {
        var parallaxScroll = null;
        
        beforeEach(function(){
            document.body.innerHTML = parallaxScrollHTML;
            parallaxScroll = new JSwidget.ParallaxScroll();
            parallaxScroll.startParallaxScroll();
        });

        afterEach(function() {
            var parallaxScroll = null;
        });
        
        it('Check parallax array is populated', function() {
            assert.strictEqual(parallaxScroll._parallaxArray.length, 2, '2 objects in parallax array');
            
            assert.isObject(parallaxScroll._parallaxArray[0].parallaxContainer, 'parallaxContainer is an object');
            assert.isDefined(parallaxScroll._parallaxArray[0].parallaxContainer.el, 'parallaxContainer.el is defined');
            assert.isDefined(parallaxScroll._parallaxArray[0].parallaxContainer.width, 'parallaxContainer.width is defined');
            assert.isDefined(parallaxScroll._parallaxArray[0].parallaxContainer.height, 'parallaxContainer.height is defined');
            assert.isDefined(parallaxScroll._parallaxArray[0].parallaxContainer.offsetTop, 'parallaxContainer.offsetTop is defined');
            
            assert.isObject(parallaxScroll._parallaxArray[0].parallaxElement, 'parallaxElement is an object');
            assert.isDefined(parallaxScroll._parallaxArray[0].parallaxElement.el, 'parallaxElement.el is defined');
            assert.isDefined(parallaxScroll._parallaxArray[0].parallaxElement.width, 'parallaxElement.width is defined');
            assert.isDefined(parallaxScroll._parallaxArray[0].parallaxElement.height, 'parallaxElement.height is defined');
            assert.isDefined(parallaxScroll._parallaxArray[0].parallaxElement.xPos, 'parallaxElement.xPos is defined');
            assert.isDefined(parallaxScroll._parallaxArray[0].parallaxElement.yPos, 'parallaxElement.yPos is defined');
        });
        
        it('Parallax element dimensions are set', function() {
            console.log('TODO: Parallax element dimensions are set');
        });
        
    });
})();