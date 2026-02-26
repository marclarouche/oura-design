const Jimp = require('jimp');

Jimp.read('public/logo2.jpg')
    .then(image => {
        // Read the top-left pixel
        const hex = image.getPixelColor(0, 0).toString(16);
        console.log('#' + hex.slice(0, 6));
    })
    .catch(err => {
        console.error(err);
    });
