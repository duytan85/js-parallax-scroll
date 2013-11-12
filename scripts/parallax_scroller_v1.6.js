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
        _windowHeight = _window.outerHeight();
    }

    //get window width
    function getWindowWidth() {
        _windowWidth = _window.outerWidth();
    }

    //get current window scroll position
    function getWindowScrollPos() {
    	_windowPos = _window.scrollTop();
    }

    //get parallax container and element information
    function getParallaxInfo() {
        _parallaxInfo = [];
        
        _parallaxContainer.each(function() {
            var $that = $(this);  
            var posTop = $that.offset().top;
            var $el = $that.find(".parallax-element");
            var elHeight = $el.outerHeight();
            var elWidth = $el.outerWidth();
            var yPosCal = -((elHeight - _windowHeight) / 2);
            var xPosCal = Math.round(-((elWidth - _windowWidth) / 2));

            var parallaxEl = {};

            parallaxEl.posTop = posTop;         //get parallax container top position
            parallaxEl.el = $el;                //get parallax element
            parallaxEl.elHeight = elHeight;     //get parallax element height
            parallaxEl.elWidth = elWidth;       //get parallax element width
            parallaxEl.yPosCal = yPosCal;       //set parallax yPos calculation formula
            parallaxEl.xPosCal = xPosCal;       //set parallax xPos calculation formula

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
            if (!_isTouch) {
                var yPos = Math.round(_parallaxInfo[i].yPosCal + (_windowPos - _parallaxInfo[i].posTop) / _scrollSpeed);
                var xPos = _parallaxInfo[i].xPosCal;

                _parallaxInfo[i].el.css({"transform" : "translate3d(" + xPos + "px ," + yPos + "px, 0)"});
            } else {
                var yPos = Math.round(_parallaxInfo[i].yPosCal);
                var xPos = _parallaxInfo[i].xPosCal;

                _parallaxInfo[i].el.css({"transform" : "translate3d(" + xPos + "px ," + yPos + "px, 0)"});
            }           
        }
    }

    //set event handlers
    function setEventHandlers() {

        //window scroll
        if (!_isTouch) {
            _window.on("scroll", function() {
                _windowPos = _window.scrollTop();

                setParallaxScroll();
            });
        }

        //window resize
    	_window.on("resize", function() {
            _setLoadlist();
        });
    }

    //set list of executable functions
    function _setLoadlist() {
        getWindowHeight();                  //get window height
        getWindowWidth();                   //get window width
        setParallaxContainerDimensions();   //set parallax container height & width
        setParallaxImgDimensions();         //set parallax image element height & width
        getParallaxInfo();                  //get parallax container and element information
        getWindowScrollPos();               //get current window scroll position
        setParallaxScroll();                //set parallax scroll position
    } 
    
    function _init(opts) {
        if (typeof opts === 'undefined') {
            var opts = {};
        }

        setup(opts);
        _setLoadlist();
        setEventHandlers();

        if (typeof _onReady === 'function') {
            _onReady.call();
        }
    }

    /*****************************************
    PUBLIC SCOPE
    *****************************************/
    return {
        init:           _init,
        setLoadList:    _setLoadlist
    }
}());