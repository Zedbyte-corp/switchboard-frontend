import WebFont from 'webfontloader';

// const imagesLoaded = require('imagesloaded');

// Preload images
// const preloadImages = (selector = 'img') => {
//     return new Promise((resolve) => {
//         imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve);
//     });
// };

// Preload images
const preloadFonts = () => {
    return new Promise((resolve, reject) => {
        WebFont.load({
            google: { families: ["Poppins"] },
            active: resolve,
            inactive: reject
        });
    });
};

const importAll = require =>
    require.keys().reduce((acc, next) => {
        acc[next.replace("./", "")] = require(next);
        return acc;
    }, {});

const loadImage = image => {
    return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = image
        // wait 2 seconds to simulate loading time
        loadImg.onload = () =>
            setTimeout(() => {
                resolve(image)
            }, 2000)

        loadImg.onerror = err => reject(err)
    })
}


export {
    // preloadImages,
    importAll,
    loadImage,
    preloadFonts
    // preloadFonts,
};