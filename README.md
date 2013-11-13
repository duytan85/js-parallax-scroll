*****************************************
Duytan Hoang
duytanhoang85@gmail.com
*****************************************

parallax JavaScript widget.

features:
- parallax animation on page scroll.
- scale image depending on window dimensions.

requires:
- jQuery library (developed with v1.9.1).

options:
- scrollSpeed. animation speed for the parallaxed element.
- parallaxHeight. height of the parallax container
- onReady. callback once setup is complete

implement:
- add class (".parallax-element") to parallax elements (usually an image).
- add class (".parallax-container") to container of parallax element.

known bugs:
- "jurking" effect. tried to resolve issue using requestAnimationFrame (in v1.5) but no joy!