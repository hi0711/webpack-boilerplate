var imagemin = require('imagemin'),
  webp = require('imagemin-webp');

imagemin(['src/img/*png'], 'dist/image/optimg', {
  plugins: [webp ({
    lossless: true
  })]
})
