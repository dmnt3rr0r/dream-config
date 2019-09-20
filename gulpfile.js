const { watch, src, dest, parallel, series } = require('gulp');
const del = require('del');

const browserSync = require('browser-sync').create();

// TODO: watch individually and only build what has changed
// TODO: run browser-sync on the build folder

const { rollupTask } = require('./gulp/rollup.js');

function clean() {
  return del([
    'public/**/*'
  ]);
}

function copyAssets() {
  return src('assets/**/*').pipe(dest('public/'));
}

function reload(cb) {
  browserSync.reload();
  cb();
}

function serve() {

  browserSync.init({
    server: './public'
  });

  watch('src/**/*.js', series(rollupTask, reload));
  watch('assets/**/*', series(copyAssets, reload));
}

exports.build = parallel(rollupTask, copyAssets);
exports.serve = serve;


exports.default = series(clean, exports.build); 
