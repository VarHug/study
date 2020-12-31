module.exports = {
  "extends": [
    "react-app"
  ],
  "plugins": [
    "react-hooks"
  ],
  "rules": {
    // style
    semi: ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    // es6
    'no-var': 'error',
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],
    // react
    'react/self-closing-comp': 'error',
  },
};
