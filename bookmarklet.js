var SHEEP_2048;
(function() {
  'use strict';
  if (SHEEP_2048) {
    SHEEP_2048();
  } else {
    function applyStyles(elem,obj) {
      for (var prop in obj) elem.style[prop]=obj[prop];
    }
    var wrapper=document.createElement("div"),
    frame=document.createElement("iframe");
    frame.src="https://www.youtube.com";
    frame.width=400; // additional 30px to hide scrollbars
    frame.height=400;
    frame.scrolling="yes";
    applyStyles(frame,{
      position:'absolute',
      top:'-151.5px',
      left:'-27px',
      border:"none"
    });
    applyStyles(wrapper,{
      position:"fixed",
      zIndex:2147483647,
      display:"block",
      bottom:"10px",
      left:"10px",
      width:"400px",
      height:"400px",
      overflow:"hidden",
      transition:"opacity 0.1s",
      borderRadius:"6px",
      transform:"scale(0.5)"
    });
    wrapper.appendChild(frame);
    document.body.parentNode.appendChild(wrapper);
    function enter() {wrapper.style.opacity="1";}
    function leave() {wrapper.style.opacity="0";frame.blur();}
    wrapper.addEventListener("mouseenter",enter,false);
    wrapper.addEventListener("mouseleave",leave,false);
    SHEEP_2048=()=>{
      wrapper.removeEventListener("mouseenter",enter,false);
      wrapper.removeEventListener("mouseleave",leave,false);
      wrapper.parentNode.removeChild(wrapper);
      frame=null;
      wrapper=null;
      SHEEP_2048=undefined;
      for (var script of document.querySelectorAll('script[src="https://raw.githubusercontent.com/loopdee43/sitesinbookmarklet/main/bookmarklet.js"]')) script.parentNode.removeChild(script);
    };
  }
}());
