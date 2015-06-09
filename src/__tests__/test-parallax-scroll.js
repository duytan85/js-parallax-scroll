'use strict';

var parallaxScrollHTML =    '<section class="parallax-container">' +
                                '<img class="parallax-element" src="images/mini.jpg" alt="Mini Cooper" />' +
                                '<div class="parallax-content">' +
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                                '</div>' +
                            '</section>' +
                            '<section class="parallax-container">' +
                                '<img class="parallax-element" height="6000" src="images/amsterdam_clown.jpg" alt="Amsterdam art work" />' +
                                '<div class="parallax-content">' +
                                    'Pellentesque eu lorem blandit, vehicula eros eu, commodo justo. Nullam dui nibh, gravida a rhoncus eget, iaculis vitae elit. Pellentesque sit amet dui magna. Mauris blandit non odio a venenatis. Donec volutpat tellus ut iaculis sodales. Integer lacinia placerat purus, ac mollis elit interdum eu. Suspendisse blandit lacinia vehicula.' +
                                '</div>' +
                            '</section>';

(function() {
    describe('Start JS parallax scroll component: ', function() {
        var parallaxScroll;

        beforeEach(function(){
            document.body.innerHTML = parallaxScrollHTML;
            parallaxScroll = new JSwidget.ParallaxScroll('selectorEl');
            parallaxScroll.startParallaxScroll();
        });

        afterEach(function() {
            parallaxScroll = null;
        });

        it('Get ".parallax-container" elements', function() {
            assert.strictEqual(parallaxScroll._parallaxContainerEl.length, 2);
        });
        
        // it('Set parallax element dimensions', function() {
        //     assert.strictEqual(parallaxScroll._parallaxEl.style.cssText, 'width: 400px; height: auto; ');
        // });
        
    });
})();