module.exports = {
  ignorePatterns: ['.next/', 'node_modules/', 'public'],
  plugins: ['simple-import-sort'],
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': 'node',
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react$', '^next', '^@', '^[a-z]'],
          ['^~'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^\\u0000'],
        ],
      },
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',

    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '_',
        varsIgnorePattern: '_',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
      },
    ],

    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: ['label'],
        labelAttributes: ['label'],
        controlComponents: ['StyledHiddenInput'],
        labelAttributes: ['htmlFor'],
        depth: 1,
      },
    ],
  },
};
