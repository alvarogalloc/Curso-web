const {
  src, dest, watch, series,
} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
// const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

const paths = {
  imagenes: 'src/img/**/*',
  scss: 'src/scss/**/*.scss',
  js: 'src/js/**/*.js',
};

function css() {
  return src(paths.scss)
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(dest('build/css'));
}
function cssmini() {
  return src(paths.scss)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(dest('build/css'));
}

function imagenes() {
  return src(paths.imagenes).pipe(imagemin()).pipe(dest('build/img'));
  // .pipe(notify({ message: 'Imagen Minificada' }));
}

function javascript() {
  return src(paths.js).pipe(concat('bundle.js')).pipe(dest('build/js'));
}

function livecss() {
  watch(paths.scss, css); // * -> carpeta actual, ** -> todos los archivos con esa extension
}

function versionWebp() {
  return src(paths.imagenes).pipe(webp()).pipe(dest('build/img'));
  // .pipe(notify({ message: 'Formato a Webp Listo' }));
}

exports.css = css;
exports.cssmini = cssmini;
exports.versionWebp = versionWebp;
exports.imagenes = imagenes;
exports.livecss = livecss;
exports.javacript = javascript;
exports.default = series(css, javascript, imagenes, versionWebp, livecss);
