// ==UserScript==
// @name         XHordes
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  A modded version of the Hordes.io client
// @author       LegusX
// @match        http://hordes.io/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
//@run-at document-start
// ==/UserScript==
(function(){
    window.stop();
    GM_xmlhttpRequest({
        method: 'GET',
        url: "http://hordes.io",
        onload: function(ev) {
            document.open();
            let index = ev.responseText.replace('<script src="script/dist.min.js"></script>', '<script src="https://rawgit.com/BlazingFire007/xhordes/master/src/xhordes.min.js"></script>');
            document.write(index);
            document.close();
        }
    });
})();
