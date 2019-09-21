module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'es6': true
  },
  'plugins': [
    'flowtype'
  ],
  'extends': [
    'plugin:flowtype/recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ]
  }
};
