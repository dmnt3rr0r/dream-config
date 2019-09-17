import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import sizes from 'rollup-plugin-sizes';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = false; // !process.env.ROLLUP_WATCH;

const commonConfig = {
  input: 'src/components/dream-config.js'
}

const commonPlugins = [
  resolve(),
  commonjs(),
  production && terser(),
  sizes()
];

export default [
  { // modern
    ...commonConfig,
    output: {
      file: 'public/sm/[name]-[hash].js',
      format: 'esm', 
      sourcemap: true
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
        envName: 'modern'
      }),
      ...commonPlugins,
    ]
  },
  {
    ...commonConfig,
    output: {
      file: 'public/sl/[name]-[hash].js',
      format: 'iife',
      sourcemap: true
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
        envName: 'legacy'
      }),
      ...commonPlugins
    ]
  }
];
