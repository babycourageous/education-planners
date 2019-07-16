const imagemin = require('imagemin')
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminPngquant = require('imagemin-pngquant')

const PNGImages = 'src/_assets/images/*.png'
const JPEGImages = 'src/_assets/images/*.jpg'
const output = '_site/images'

const optimisePNGImages = () =>
  imagemin([PNGImages], output, {
    plugins: [imageminPngquant({ quality: [0.65, 0.8] })],
  })

const optimiseJPEGImages = () =>
  imagemin([JPEGImages], output, {
    plugins: [
      imageminMozjpeg({
        quality: 85,
      }),
    ],
  })

optimiseJPEGImages()
  .then(() => optimisePNGImages())
  // eslint-disable-next-line no-console
  .catch(error => console.log(error))
