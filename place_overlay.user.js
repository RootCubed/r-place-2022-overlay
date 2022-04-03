// ==UserScript==
// @name         r/starwars_place Allies
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Keep the canvas beautiful!
// @author       oralekin from osu! /r/osuplace, maintainer /u/irate_kalypso /r/starwars_place, overlay list by RootCubed
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/RootCubed/r-place-2022/raw/main/place_overlay.user.js
// @downloadURL  https://github.com/RootCubed/r-place-2022/raw/main/place_overlay.user.js
// @grant        none
// ==/UserScript==

const overlays = [
    "https://cdn.discordapp.com/attachments/960020069553942538/960020540788199454/overlay_v90.png", // Some others
    "https://cdn.mirai.gg/tmp/dotted-place-template.png", // Star Wars & Main allies
    "https://raw.githubusercontent.com/RootCubed/r-place-2022-overlay/main/rplace_switzerland_overlay.png" // Switzerland
];

if (window.top !== window.self) {
    window.addEventListener('load', () => {
        const camera = document.querySelector("mona-lisa-embed").shadowRoot.querySelector("mona-lisa-camera");
        const canvas = camera.querySelector("mona-lisa-canvas");

        // Load the image
        for (let ov of overlays) {
            const image = document.createElement("img");
            image.src = ov + "?t=" + Date.now(); // random query parameter to ensure no caching
            image.onload = () => {
                image.style = `position: absolute; left: 0; top: 0; width: ${image.width/3}px; height: ${image.height/3}px; image-rendering: pixelated; z-index: 1`;
            };

            // Add the image as overlay
            canvas.shadowRoot.querySelector('.container').appendChild(image);
        }

        // Add a style to put a hole in the pixel preview (to see the current or desired color)
        const waitForPreview = setInterval(() => {
            const preview = camera.querySelector("mona-lisa-pixel-preview");
            if (preview) {
              clearInterval(waitForPreview);
              const style = document.createElement('style')
              style.innerHTML = '.pixel { clip-path: polygon(-20% -20%, -20% 120%, 37% 120%, 37% 37%, 62% 37%, 62% 62%, 37% 62%, 37% 120%, 120% 120%, 120% -20%); }'
              preview.shadowRoot.appendChild(style);
            }
        }, 100);
    }, false);
}
