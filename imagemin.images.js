const imagemin = require("imagemin");
const imageminPngquant = require("imagemin-pngquant");
const imageminMozjpeg = require("imagemin-mozjpeg");

imagemin(["_assets/images/**/*.+(jpg|png|jpeg|gif)"], "_site/assets/images", {
  use: [
    imageminMozjpeg({
      quality: 80
    }),
    imageminPngquant()
  ]
}).then(function() {
  console.log("Images were successfully optimized");
});
