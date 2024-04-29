module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals' // Corrected the misplaced quote here
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
    }],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    indent: ['error', 2],
    camelcase: 'warn',
    'class-methods-use-this': 'off', // Corrected the rule name here
  },
};
