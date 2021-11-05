const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const { init, write } = require('gulp-sourcemaps');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const terser = require('gulp-terser-js');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const cache = require('gulp-cache');
const webp = require('gulp-webp');

const paths = {
  scss: 'src/scss/**/*.scss',
  js: 'src/js/**/*.js',
  imagenes: 'src/img/**/*'
};

// css es una función que se puede llamar automaticamente
function css() {
  return (
    src(paths.scss)
      .pipe(init())
      .pipe(sass())
      .pipe(postcss([autoprefixer(), cssnano()]))
      .pipe(postcss([autoprefixer()]))
      .pipe(write('.'))
      .pipe(dest('./build/css'))
  );
}

function javascript() {
  return src(paths.js)
    .pipe(init())
    .pipe(concat('bundle.js')) // final output file name
    .pipe(terser())
    .pipe(rename({ suffix: '.min' }))
    .pipe(write('.'))
    .pipe(dest('./build/js'));
}

function imagenes() {
  return src(paths.imagenes)
    .pipe(cache(imagemin({ optimizationLevel: 3 })))
    .pipe(dest('build/img'))
    .pipe(notify({ message: 'Imagen Completada' }));
}

function versionWebp() {
  return src(paths.imagenes)
    .pipe(webp())
    .pipe(dest('build/img'))
    .pipe(notify({ message: 'Imagen Completada' }));
}

function watchArchivos() {
  watch(paths.scss, css);
  watch(paths.js, javascript);
  watch(paths.imagenes, imagenes);
  watch(paths.imagenes, versionWebp);
}

const _default = parallel(
    css,
    javascript,
    imagenes,
    versionWebp,
    watchArchivos
);
export { _default as default };
const _watchArchivos = watchArchivos;
export { _watchArchivos as watchArchivos };
const _default = parallel(
    css,
    javascript,
    imagenes,
    versionWebp,
    watchArchivos
);
export { _default as default };
