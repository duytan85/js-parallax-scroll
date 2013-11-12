/*****************************************
Duytan Hoang.

parallax animation on page scroll. 
scale image depending on window dimensions. 

- add class (".parallax-element") to parallax elements (usually an image).
- add class (".parallax-container") to container of parallax element.

options:
- scrollSpeed
  animation speed for the parallaxed element.
- parallaxHeight
  height of the parallax container.
- onReady
  callback once setup is complete.
- isTouch
  true or false if touch device.

requires:
- jQuery library (developed with v1.9.1).
*****************************************/

if (typeof JSwidgets === 'undefined') {
    var JSwidgets = {};
}

JSwidgets.parallax = (function() {

    /*****************************************
    GLOBAL VARS
    *****************************************/
    var _window = null;             //window element
    var _windowHeight = 0;          //window outer height
    var _windowWidth = 0;           //window outer width
    var _windowPos = 0;             //current window scroll position
    var _parallaxContainer = null;  //parallax container
    var _parallaxInfo = [];         //collection of parallax information
    var _scrollSpeed;               //option: animation scroll speed
    var _parallaxHeight;            //option: parallax container height
    var _onReady;                   //option: callback when setup complete
    var _isTouch;                   //option: if touch device. true or false

    /****************************************
    PRIVATE SCOPE
    ****************************************/

    //get window height
    function getWindowHeight() {
        _windowHeight = $(window).outerHeight();
    }

    //get window width
    function getWindowWidth() {
        _windowWidth = $(window).outerWidth();
    }

    //get current window scroll position
    function getWindowScrollPos() {
    	_windowPos = $(window).scrollTop();
    }

    //get parallax container and element information
    function getParallaxInfo() {
        _parallaxInfo = [];
        
        _parallaxContainer.each(function() {
            var $that = $(this);  
            var posTop = $that.offset().top;
            var posStart = posTop - _windowHeight;
            var posEnd = posTop + $that.outerHeight();

            var $el = $that.find(".parallax-element");
            var elHeight = $el.outerHeight();
            var elWidth = $el.outerWidth();

            var parallaxEl = {};

            parallaxEl.posTop = posTop;         //get parallax container top position
            parallaxEl.posStart = posStart;     //get parallax container start position when to animate
            parallaxEl.posEnd = posEnd;         //get parallax container end position
            parallaxEl.el = $el;                //get parallax element
            parallaxEl.elHeight = elHeight;     //get parallax element height
            parallaxEl.elWidth = elWidth;       //get parallax element width

            _parallaxInfo.push(parallaxEl);
        });
    } 

    //set optional  & global variables
    function setup(opts) {
        _window = $(window);
        _parallaxContainer = $(".parallax-container");
        _scrollSpeed = opts.scrollSpeed || 1;
        _parallaxHeight = opts.parallaxHeight || null;
        _onReady = opts.onReady || null;
        _isTouch = opts.isTouch || false;
    }

    //set list of executable functions
    function setLoadlist() {
        getWindowHeight();                  //get window height
        getWindowWidth();                   //get window width
        setParallaxContainerDimensions();   //set parallax container height & width
        setParallaxImgDimensions();         //set parallax image element height & width
        getParallaxInfo();                  //get parallax container and element information
        getWindowScrollPos();               //get current window scroll position

        if (typeof _onReady === 'function') {
            _onReady.call();
        }

        setParallaxScroll();
    } 

    //set parallax container height & width
    function setParallaxContainerDimensions() {
        var parallaxContainerHeight;

        if (_parallaxHeight === null) {
            parallaxContainerHeight = _windowHeight;
        } else {
            parallaxContainerHeight = _parallaxHeight;
        }

        _parallaxContainer.css({
            "height": parallaxContainerHeight + "px",
            "width": _windowWidth + "px"
        });
    }

    //set parallax image element height & width
    function setParallaxImgDimensions() {
        _parallaxContainer.each(function() {
            var $parallaxEl = $(this).find(".parallax-element");

            $parallaxEl.css({
                width: _windowWidth + "px",
                height: "auto"
            });

            if ($parallaxEl.outerHeight() <= _windowHeight) {
                $parallaxEl.css({
                    height: _windowHeight + "px",
                    width: "auto"  
                });
            }
        });
    }

    //set parallax scroll position
    function setParallaxScroll() {
        for (var i=0; i<_parallaxInfo.length; i++) {
            var yPos;
            var xPos;

            if (!_isTouch) {
                yPos = -((_parallaxInfo[i].elHeight - _windowHeight) / 2) + (_windowPos - _parallaxInfo[i].posTop) / _scrollSpeed;
                xPos = -((_parallaxInfo[i].elWidth - _windowWidth) / 2);
            } else {
                yPos = -((_parallaxInfo[i].elHeight - _windowHeight) / 2);
                xPos = -((_parallaxInfo[i].elWidth - _windowWidth) / 2); 
            }
            if (_windowPos >= _parallaxInfo[i].posStart && _windowPos <= _parallaxInfo[i].posEnd) {
                _parallaxInfo[i].el.css({"transform" : "translate3d(" + xPos + "px ," + yPos + "px, 0)"});
            }
        }
    }

    //set event handlers
    function setEventHandlers() {

        //window scroll
        _window.on("scroll", function() {
            _windowPos = _window.scrollTop();
            setParallaxScroll();         
        });

        //window resize
    	_window.on("resize", function() {
            setLoadlist();
        });
    }
    
    function _init(opts) {
        if (typeof opts === 'undefined') {
            var opts = {};
        }

        setup(opts);
        setLoadlist();
        setEventHandlers();
    }

    /*****************************************
    PUBLIC SCOPE
    *****************************************/
    return {
        init: _init
    }
}());