const { isVariableStatement } = require( "typescript" );

module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin: prettier / recommended',
    'extends": "next/core-web-vitals'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': ['error', {
      'ignore': ['data-testid', "testid"]
    }]
    ,
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    indent: ['error', 2],
    camelcase: 'warn',
    classMethodsUseThis: 'off',
    noUnusedVars: 'warn',
    noUnusedLocals: 'warn',
    noImplicitReturns: 'warn',
    UPPER_SNAKE_CASE: 'warn',
    "import/order": ["error", {
      "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
      "newlines-between": "always",
      "alphabetize": { "order": "asc", "caseInsensitive": true }
    }],
  },
};
