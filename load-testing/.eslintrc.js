module.exports = {
  root: true,
  env: {
    node: true
  },
  rules: {
    'no-console': 'error',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'sort-imports': 'error',
    'space-before-function-paren': 1
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
