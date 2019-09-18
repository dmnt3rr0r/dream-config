const { src, dest, parallel, task } = require('gulp');
const { exec } = require('child_process');

// TODO: run in parallel: [rollup, copy assets, /* postcss */ ]
// TODO: run b4 build: rimraf
// TODO: watch individually and only build what has changed
// TODO: run browser-sync on the build folder

const { rollupTask } = require('./gulp/rollup.js');


task('default', rollupTask);

