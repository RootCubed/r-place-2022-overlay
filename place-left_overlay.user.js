// ==UserScript==
// @name         PlaceCH Overlay Left
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  Keep the canvas beautiful!
// @author       /r/switzerland credits: oralekin from osu! /r/osuplace, maintainer /u/irate_kalypso /r/starwars_place
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://cdn.discordapp.com/attachments/959089858519924838/959901191662354472/place_switzerland_new_design_overlay.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1000px;height: 1000px;";
            console.log(i);
            return i;
        })())

    }, false);

}
