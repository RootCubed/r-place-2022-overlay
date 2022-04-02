// ==UserScript==
// @name         PlaceCH Overlay Left
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Keep the canvas beautiful!
// @author       /r/switzerland credits: oralekin from osu! /r/osuplace, maintainer /u/irate_kalypso /r/starwars_place
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://raw.githubusercontent.com/placeCH/r-place-2022-overlay/main/place-left_overlay.user.js
// @downloadURL  https://raw.githubusercontent.com/placeCH/r-place-2022-overlay/main/place-left_overlay.user.js
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://cdn.discordapp.com/attachments/959089858519924838/959899697739333713/Overlay_Flower_Mountain_up_heart.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1000px;height: 1000px;";
            console.log(i);
            return i;
        })())

    }, false);

}
