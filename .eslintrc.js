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
    indent: ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      CallExpression: {
        arguments: 1
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoredNodes: ['JSXElement', 'JSXElement *']
    }],
    // es6
    'no-var': 'error',
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],
    // best-practices
    'no-multi-spaces': ['error', {
      ignoreEOLComments: false,
    }],
    // react
    'react/self-closing-comp': 'error',
    'react/jsx-indent': ['error', 2],
  },
};
