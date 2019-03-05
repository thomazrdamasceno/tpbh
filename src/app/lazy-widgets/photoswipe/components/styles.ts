const PhotoswipeStyles = `/*! PhotoSwipe main CSS by Dmitry Semenov | photoswipe.com | MIT license */
/*
	Styles for basic PhotoSwipe functionality (sliding area, open/close transitions)
*/
/* pswp = photoswipe */
.pswp {
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  -ms-touch-action: none;
  touch-action: none;
  z-index: 1500;
  -webkit-text-size-adjust: 100%;
  /* create separate layer, to avoid paint on window.onscroll in webkit/blink */
  -webkit-backface-visibility: hidden;
  outline: none; }
  .pswp * {
    -webkit-box-sizing: border-box;
            box-sizing: border-box; }
  .pswp img {
    max-width: none; }
/* style is added when JS option showHideOpacity is set to true */
.pswp--animate_opacity {
  /* 0.001, because opacity:0 doesn't trigger Paint action, which causes lag at start of transition */
  opacity: 0.001;
  will-change: opacity;
  /* for open/close transition */
  -webkit-transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);
          transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1); }
.pswp--open {
  display: block; }
.pswp--zoom-allowed .pswp__img {
  /* autoprefixer: off */
  cursor: -webkit-zoom-in;
  cursor: -moz-zoom-in;
  cursor: zoom-in; }
.pswp--zoomed-in .pswp__img {
  /* autoprefixer: off */
  cursor: -webkit-grab;
  cursor: -moz-grab;
  cursor: grab; }
.pswp--dragging .pswp__img {
  /* autoprefixer: off */
  cursor: -webkit-grabbing;
  cursor: -moz-grabbing;
  cursor: grabbing; }
/*
	Background is added as a separate element.
	As animating opacity is much faster than animating rgba() background-color.
*/
.pswp__bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0;
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  will-change: opacity; }
.pswp__scroll-wrap {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; }
.pswp__container,
.pswp__zoom-wrap {
  -ms-touch-action: none;
  touch-action: none;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0; }
/* Prevent selection and tap highlights */
.pswp__container,
.pswp__img {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
      user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none; }
.pswp__zoom-wrap {
  position: absolute;
  width: 100%;
  -webkit-transform-origin: left top;
  -ms-transform-origin: left top;
  transform-origin: left top;
  /* for open/close transition */
  -webkit-transition: -webkit-transform 333ms cubic-bezier(0.4, 0, 0.22, 1);
          transition: transform 333ms cubic-bezier(0.4, 0, 0.22, 1); }
.pswp__bg {
  will-change: opacity;
  /* for open/close transition */
  -webkit-transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);
          transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1); }
.pswp--animated-in .pswp__bg,
.pswp--animated-in .pswp__zoom-wrap {
  -webkit-transition: none;
  transition: none; }
.pswp__container,
.pswp__zoom-wrap {
  -webkit-backface-visibility: hidden; }
.pswp__item {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden; }
.pswp__img {
  position: absolute;
  width: auto;
  height: auto;
  top: 0;
  left: 0; }
/*
	stretched thumbnail or div placeholder element (see below)
	style is added to avoid flickering in webkit/blink when layers overlap
*/
.pswp__img--placeholder {
  -webkit-backface-visibility: hidden; }
/*
	div element that matches size of large image
	large image loads on top of it
*/
.pswp__img--placeholder--blank {
  background: #222; }
.pswp--ie .pswp__img {
  width: 100% !important;
  height: auto !important;
  left: 0;
  top: 0; }
/*
	Error message appears when image is not loaded
	(JS option errorMsg controls markup)
*/
.pswp__error-msg {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 16px;
  margin-top: -8px;
  color: #CCC; }
.pswp__error-msg a {
  color: #CCC;
  text-decoration: underline; }`;

const PhotoswipeDefaultSkin = `/*! PhotoSwipe Default UI CSS by Dmitry Semenov | photoswipe.com | MIT license */
/*
	Contents:
	1. Buttons
	2. Share modal and links
	3. Index indicator ("1 of X" counter)
	4. Caption
	5. Loading indicator
	6. Additional styles (root element, top bar, idle state, hidden state, etc.)
*/
/*

	1. Buttons
 */
/* <button> css reset */
.pswp__button {
  width: 44px;
  height: 44px;
  position: relative;
  background: none;
  cursor: pointer;
  overflow: visible;
  -webkit-appearance: none;
  display: block;
  border: 0;
  padding: 0;
  margin: 0;
  float: right;
  opacity: 0.75;
  -webkit-transition: opacity 0.2s;
          transition: opacity 0.2s;
  -webkit-box-shadow: none;
          box-shadow: none; }
  .pswp__button:focus,
  .pswp__button:hover {
    opacity: 1; }
  .pswp__button:active {
    outline: none;
    opacity: 0.9; }
  .pswp__button::-moz-focus-inner {
    padding: 0;
    border: 0; }
/* pswp__ui--over-close class it added when mouse is over element that should close gallery */
.pswp__ui--over-close .pswp__button--close {
  opacity: 1; }
.pswp__button,
.pswp__button--arrow--left:before,
.pswp__button--arrow--right:before {
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAABYCAQAAACjBqE3AAAB6klEQVR4Ae3bsWpUQRTG8YkkanwCa7GzVotsI/gEgk9h4Vu4ySLYmMYgbJrc3lrwZbJwC0FMt4j7F6Y4oIZrsXtgxvx/1c0ufEX4cnbmLCmSJEmSJEmSJEmSJP3XCBPvbJU+8doWmDFwyZpLBmYlNJebz0KwzykwsuSYJSNwykEJreV2BaBMaLIQZ2xYcFgqDlmw4ayE/FwL0dDk4Qh4W37DAjgqIT+3HRbigjH+iikVdxgZStgyN0Su2sXIeTwTT+esdpcbIlfNAuZ/TxresG4zV8kYWSZNiKUTokMMSWeIwTNEn4fK2TW3gRNgVkJLuVksROA9G+bEvoATNlBCa7nZXEwdxEZxzpKRKFh+bsv8LmPFmhX1OwfIz81jIRJQ5eeqG9B+riRJkiRJkiRJkiRJkiRJkiRJUkvA/8RQoEpKlJWINFkJ62AlrEP/mNBibnv2yz/A3t7Uq3LcpoxP8COjC1T5vxoAD5VdoEqdDrd5QuW1swtUSaueh3zkiuBiqgtA2OlkeMcP/uDqugsJdbjHF65VdPMKwS0+WQc/MgKvrIOHysB9vgPwk8+85hmPbnQdvHZyDMAFD7L3EOpgMcVdvnHFS0/vlatrXvCVx0U9gt3fxvnA0/hB4nmRJEmSJEmSJEmSJGmHfgFLaDPoMu5xWwAAAABJRU5ErkJggg==') 0 0 no-repeat;
  background-size: 264px 88px;
  width: 44px;
  height: 44px; }
@media (-webkit-min-device-pixel-ratio: 1.1), (-webkit-min-device-pixel-ratio: 1.09375), (min-resolution: 105dpi), (min-resolution: 1.1dppx) {
  /* Serve SVG sprite if browser supports SVG and resolution is more than 105dpi */
  .pswp--svg .pswp__button,
  .pswp--svg .pswp__button--arrow--left:before,
  .pswp--svg .pswp__button--arrow--right:before {
    background-image: url("data:image/svg+xml;utf8,<svg width='264' height='88' viewBox='0 0 264 88' xmlns='http://www.w3.org/2000/svg'><title>default-skin 2</title><g fill='none' fill-rule='evenodd'><g><path d='M67.002 59.5v3.768c-6.307.84-9.184 5.75-10.002 9.732 2.22-2.83 5.564-5.098 10.002-5.098V71.5L73 65.585 67.002 59.5z' id='Shape' fill='#fff'/><g fill='#fff'><path d='M13 29v-5h2v3h3v2h-5zM13 15h5v2h-3v3h-2v-5zM31 15v5h-2v-3h-3v-2h5zM31 29h-5v-2h3v-3h2v5z' id='Shape'/></g><g fill='#fff'><path d='M62 24v5h-2v-3h-3v-2h5zM62 20h-5v-2h3v-3h2v5zM70 20v-5h2v3h3v2h-5zM70 24h5v2h-3v3h-2v-5z'/></g><path d='M20.586 66l-5.656-5.656 1.414-1.414L22 64.586l5.656-5.656 1.414 1.414L23.414 66l5.656 5.656-1.414 1.414L22 67.414l-5.656 5.656-1.414-1.414L20.586 66z' fill='#fff'/><path d='M111.785 65.03L110 63.5l3-3.5h-10v-2h10l-3-3.5 1.785-1.468L117 59l-5.215 6.03z' fill='#fff'/><path d='M152.215 65.03L154 63.5l-3-3.5h10v-2h-10l3-3.5-1.785-1.468L147 59l5.215 6.03z' fill='#fff'/><g><path id='Rectangle-11' fill='#fff' d='M160.957 28.543l-3.25-3.25-1.413 1.414 3.25 3.25z'/><path d='M152.5 27c3.038 0 5.5-2.462 5.5-5.5s-2.462-5.5-5.5-5.5-5.5 2.462-5.5 5.5 2.462 5.5 5.5 5.5z' id='Oval-1' stroke='#fff' stroke-width='1.5'/><path fill='#fff' d='M150 21h5v1h-5z'/></g><g><path d='M116.957 28.543l-1.414 1.414-3.25-3.25 1.414-1.414 3.25 3.25z' fill='#fff'/><path d='M108.5 27c3.038 0 5.5-2.462 5.5-5.5s-2.462-5.5-5.5-5.5-5.5 2.462-5.5 5.5 2.462 5.5 5.5 5.5z' stroke='#fff' stroke-width='1.5'/><path fill='#fff' d='M106 21h5v1h-5z'/><path fill='#fff' d='M109.043 19.008l-.085 5-1-.017.085-5z'/></g></g></g></svg>"); }
  .pswp--svg .pswp__button--arrow--left,
  .pswp--svg .pswp__button--arrow--right {
    background: none; } }
.pswp__button--close {
  background-position: 0 -44px; }
.pswp__button--share {
  background-position: -44px -44px; }
.pswp__button--fs {
  display: none; }
.pswp--supports-fs .pswp__button--fs {
  display: block; }
.pswp--fs .pswp__button--fs {
  background-position: -44px 0; }
.pswp__button--zoom {
  display: none;
  background-position: -88px 0; }
.pswp--zoom-allowed .pswp__button--zoom {
  display: block; }
.pswp--zoomed-in .pswp__button--zoom {
  background-position: -132px 0; }
/* no arrows on touch screens */
.pswp--touch .pswp__button--arrow--left,
.pswp--touch .pswp__button--arrow--right {
  visibility: hidden; }
/*
	Arrow buttons hit area
	(icon is added to :before pseudo-element)
*/
.pswp__button--arrow--left,
.pswp__button--arrow--right {
  background: none;
  top: 50%;
  margin-top: -50px;
  width: 70px;
  height: 100px;
  position: absolute; }
.pswp__button--arrow--left {
  left: 0; }
.pswp__button--arrow--right {
  right: 0; }
.pswp__button--arrow--left:before,
.pswp__button--arrow--right:before {
  content: '';
  top: 35px;
  background-color: rgba(0, 0, 0, 0.3);
  height: 30px;
  width: 32px;
  position: absolute; }
.pswp__button--arrow--left:before {
  left: 6px;
  background-position: -138px -44px; }
.pswp__button--arrow--right:before {
  right: 6px;
  background-position: -94px -44px; }
/*
	2. Share modal/popup and links
 */
.pswp__counter,
.pswp__share-modal {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
      user-select: none; }
.pswp__share-modal {
  display: block;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 10px;
  position: absolute;
  z-index: 1600;
  opacity: 0;
  -webkit-transition: opacity 0.25s ease-out;
          transition: opacity 0.25s ease-out;
  -webkit-backface-visibility: hidden;
  will-change: opacity; }
.pswp__share-modal--hidden {
  display: none; }
.pswp__share-tooltip {
  z-index: 1620;
  position: absolute;
  background: #FFF;
  top: 56px;
  border-radius: 2px;
  display: block;
  width: auto;
  right: 44px;
  -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  -webkit-transform: translateY(6px);
      -ms-transform: translateY(6px);
          transform: translateY(6px);
  -webkit-transition: -webkit-transform 0.25s;
          transition: transform 0.25s;
  -webkit-backface-visibility: hidden;
  will-change: transform; }
  .pswp__share-tooltip a {
    display: block;
    padding: 8px 12px;
    color: #000;
    text-decoration: none;
    font-size: 14px;
    line-height: 18px; }
    .pswp__share-tooltip a:hover {
      text-decoration: none;
      color: #000; }
    .pswp__share-tooltip a:first-child {
      /* round corners on the first/last list item */
      border-radius: 2px 2px 0 0; }
    .pswp__share-tooltip a:last-child {
      border-radius: 0 0 2px 2px; }
.pswp__share-modal--fade-in {
  opacity: 1; }
  .pswp__share-modal--fade-in .pswp__share-tooltip {
    -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
            transform: translateY(0); }
/* increase size of share links on touch devices */
.pswp--touch .pswp__share-tooltip a {
  padding: 16px 12px; }
a.pswp__share--facebook:before {
  content: '';
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  top: -12px;
  right: 15px;
  border: 6px solid transparent;
  border-bottom-color: #FFF;
  -webkit-pointer-events: none;
  -moz-pointer-events: none;
  pointer-events: none; }
a.pswp__share--facebook:hover {
  background: #3E5C9A;
  color: #FFF; }
  a.pswp__share--facebook:hover:before {
    border-bottom-color: #3E5C9A; }
a.pswp__share--twitter:hover {
  background: #55ACEE;
  color: #FFF; }
a.pswp__share--pinterest:hover {
  background: #CCC;
  color: #CE272D; }
a.pswp__share--download:hover {
  background: #DDD; }
/*
	3. Index indicator ("1 of X" counter)
 */
.pswp__counter {
  position: absolute;
  left: 0;
  top: 0;
  height: 44px;
  font-size: 13px;
  line-height: 44px;
  color: #FFF;
  opacity: 0.75;
  padding: 0 10px; }
/*

	4. Caption
 */
.pswp__caption {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  min-height: 44px; }
  .pswp__caption small {
    font-size: 11px;
    color: #BBB; }
.pswp__caption__center {
  text-align: left;
  max-width: 420px;
  margin: 0 auto;
  font-size: 13px;
  padding: 10px;
  line-height: 20px;
  color: #CCC; }
.pswp__caption--empty {
  display: none; }
/* Fake caption element, used to calculate height of next/prev image */
.pswp__caption--fake {
  visibility: hidden; }
/*
	5. Loading indicator (preloader)
	You can play with it here - http://codepen.io/dimsemenov/pen/yyBWoR
 */
.pswp__preloader {
  width: 44px;
  height: 44px;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -22px;
  opacity: 0;
  -webkit-transition: opacity 0.25s ease-out;
          transition: opacity 0.25s ease-out;
  will-change: opacity;
  direction: ltr; }
.pswp__preloader__icn {
  width: 20px;
  height: 20px;
  margin: 12px; }
.pswp__preloader--active {
  opacity: 1; }
  .pswp__preloader--active .pswp__preloader__icn {
    /* We use .gif in browsers that don't support CSS animation */
    background: url('data:image/gif;base64,R0lGODlhFAAUAPMIAIeHhz8/P1dXVycnJ8/Pz7e3t5+fn29vb////wAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAIACwAAAAAFAAUAEAEUxDJSatFxtwaggWAdIyHJAhXoRYSQUhDPGx0TbmujahbXGWZWqdDAYEsp5NupLPkdDwE7oXwWVasimzWrAE1tKFHErQRK8eL8mMUlRBJVI307uoiACH5BAUHAAgALAEAAQASABIAAAROEMkpS6E4W5upMdUmEQT2feFIltMJYivbvhnZ3R0A4NMwIDodz+cL7nDEn5CH8DGZh8MtEMBEoxkqlXKVIgQCibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpjaE4W5spANUmFQX2feFIltMJYivbvhnZ3d1x4BNBIDodz+cL7nDEn5CH8DGZAsFtMMBEoxkqlXKVIgIBibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpAaA4W5vpOdUmGQb2feFIltMJYivbvhnZ3Z0g4FNRIDodz+cL7nDEn5CH8DGZgcCNQMBEoxkqlXKVIgYDibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpz6E4W5upENUmAQD2feFIltMJYivbvhnZ3V0Q4JNhIDodz+cL7nDEn5CH8DGZg8GtUMBEoxkqlXKVIggEibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkphaA4W5tpCNUmHQf2feFIltMJYivbvhnZ3d0w4BMAIDodz+cL7nDEn5CH8DGZBMLNYMBEoxkqlXKVIgoFibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpQ6A4W5vpGNUmCQL2feFIltMJYivbvhnZ3R1B4NNxIDodz+cL7nDEn5CH8DGZhcINAMBEoxkqlXKVIgwGibbK9YLBYvLtHH5K0J0IACH5BAUHAAcALAEAAQASABIAAANCeLo6wzA6FxkhbaoQ4L3ZxnXLh0EjWZ4RV71VUcCLIByyTNt2PsO8m452sBGJBsNxkUwuD03lAQBASqnUJ7aq5UYSADs=') 0 0 no-repeat; }
.pswp--css_animation .pswp__preloader--active {
  opacity: 1; }
  .pswp--css_animation .pswp__preloader--active .pswp__preloader__icn {
    -webkit-animation: clockwise 500ms linear infinite;
            animation: clockwise 500ms linear infinite; }
  .pswp--css_animation .pswp__preloader--active .pswp__preloader__donut {
    -webkit-animation: donut-rotate 1000ms cubic-bezier(0.4, 0, 0.22, 1) infinite;
            animation: donut-rotate 1000ms cubic-bezier(0.4, 0, 0.22, 1) infinite; }
.pswp--css_animation .pswp__preloader__icn {
  background: none;
  opacity: 0.75;
  width: 14px;
  height: 14px;
  position: absolute;
  left: 15px;
  top: 15px;
  margin: 0; }
.pswp--css_animation .pswp__preloader__cut {
  /*
			The idea of animating inner circle is based on Polymer ("material") loading indicator
			 by Keanu Lee https://blog.keanulee.com/2014/10/20/the-tale-of-three-spinners.html
		*/
  position: relative;
  width: 7px;
  height: 14px;
  overflow: hidden; }
.pswp--css_animation .pswp__preloader__donut {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  width: 14px;
  height: 14px;
  border: 2px solid #FFF;
  border-radius: 50%;
  border-left-color: transparent;
  border-bottom-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  background: none;
  margin: 0; }
@media screen and (max-width: 1024px) {
  .pswp__preloader {
    position: relative;
    left: auto;
    top: auto;
    margin: 0;
    float: right; } }
@-webkit-keyframes clockwise {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg); }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); } }
@keyframes clockwise {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg); }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); } }
@-webkit-keyframes donut-rotate {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0); }
  50% {
    -webkit-transform: rotate(-140deg);
            transform: rotate(-140deg); }
  100% {
    -webkit-transform: rotate(0);
            transform: rotate(0); } }
@keyframes donut-rotate {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0); }
  50% {
    -webkit-transform: rotate(-140deg);
            transform: rotate(-140deg); }
  100% {
    -webkit-transform: rotate(0);
            transform: rotate(0); } }
/*

	6. Additional styles
 */
/* root element of UI */
.pswp__ui {
  -webkit-font-smoothing: auto;
  visibility: visible;
  opacity: 1;
  z-index: 1550; }
/* top black bar with buttons and "1 of X" indicator */
.pswp__top-bar {
  position: absolute;
  left: 0;
  top: 0;
  height: 44px;
  width: 100%; }
.pswp__caption,
.pswp__top-bar,
.pswp--has_mouse .pswp__button--arrow--left,
.pswp--has_mouse .pswp__button--arrow--right {
  -webkit-backface-visibility: hidden;
  will-change: opacity;
  -webkit-transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);
          transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1); }
/* pswp--has_mouse class is added only when two subsequent mousemove events occur */
.pswp--has_mouse .pswp__button--arrow--left,
.pswp--has_mouse .pswp__button--arrow--right {
  visibility: visible; }
.pswp__top-bar,
.pswp__caption {
  background-color: rgba(0, 0, 0, 0.5); }
/* pswp__ui--fit class is added when main image "fits" between top bar and bottom bar (caption) */
.pswp__ui--fit .pswp__top-bar,
.pswp__ui--fit .pswp__caption {
  background-color: rgba(0, 0, 0, 0.3); }
/* pswp__ui--idle class is added when mouse isn't moving for several seconds (JS option timeToIdle) */
.pswp__ui--idle .pswp__top-bar {
  opacity: 0; }
.pswp__ui--idle .pswp__button--arrow--left,
.pswp__ui--idle .pswp__button--arrow--right {
  opacity: 0; }
/*
	pswp__ui--hidden class is added when controls are hidden
	e.g. when user taps to toggle visibility of controls
*/
.pswp__ui--hidden .pswp__top-bar,
.pswp__ui--hidden .pswp__caption,
.pswp__ui--hidden .pswp__button--arrow--left,
.pswp__ui--hidden .pswp__button--arrow--right {
  /* Force paint & create composition layer for controls. */
  opacity: 0.001; }
/* pswp__ui--one-slide class is added when there is just one item in gallery */
.pswp__ui--one-slide .pswp__button--arrow--left,
.pswp__ui--one-slide .pswp__button--arrow--right,
.pswp__ui--one-slide .pswp__counter {
  display: none; }
.pswp__element--disabled {
  display: none !important; }
.pswp--minimal--dark .pswp__top-bar {
  background: none; }`;

export { PhotoswipeStyles, PhotoswipeDefaultSkin};
