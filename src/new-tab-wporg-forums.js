// ==UserScript==
// @name         New tab links on wporg forums
// @version      1.1
// @description  Open all links from in a new tab
// @author       Vlad Timotei
// @include      https://wordpress.org/support/*
// @exclude      https://wordpress.org/support/users/*
// ==/UserScript==

(function() {
    'use strict';
   var links = document.getElementsByTagName('a');
   var len = links.length;

   for(var i=0; i<len; i++)
   {
    if(links[i]['className']!='page-numbers'&&links[i]['className']!='bbp-view-title')
    { links[i].target = "_blank";
    }
   }
})();