const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css() {
  return src('src/scss/app.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(dest('./build/css'));
}

exports.css = css;
