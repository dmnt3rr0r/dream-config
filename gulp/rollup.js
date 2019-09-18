const { src, dest, parallel, task } = require('gulp');
const rollup = require('gulp-better-rollup');
const sourcemaps = require('gulp-sourcemaps');

const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const { terser } = require('rollup-plugin-terser');
const babel = require('rollup-plugin-babel');
const { sizeSnapshot } = require('rollup-plugin-size-snapshot');

const production = (process.env.NODE_ENV === 'production');

const commonPlugins = [
  resolve(),
  commonjs(),
  production && sizeSnapshot(),
  production && terser(),
];

function genTask(input, envName, file, format) {
  return function() {
    return src(input)
      .pipe(sourcemaps.init())
      .pipe(rollup({
        plugins: [
          babel({
            exclude: "node_modules/**",
            envName
          }),
          ...commonPlugins
        ]}, { file, format }))
      .pipe(sourcemaps.write(''))
      .pipe(dest('public/' + envName));
  };
}

const esmBuildTask = genTask(
  'src/components/dream-config.js',
  'modern',
  'sm/bundle.js',
  'esm'
);


const iifeBuildTask = genTask(
  'src/components/dream-config.js',
  'legacy',
  'sl/bundle.js',
  'iife'
);


const rollupTask = parallel(esmBuildTask, iifeBuildTask);
exports.rollupTask = rollupTask;


