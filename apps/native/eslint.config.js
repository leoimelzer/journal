const expoConfig = require('eslint-config-expo/flat')
const importHelpers = require('eslint-plugin-import-helpers')
const prettier = require('eslint-plugin-prettier')
const react = require('eslint-plugin-react')
const reactNative = require('eslint-plugin-react-native')
const { defineConfig } = require('eslint/config')

module.exports = defineConfig([
  expoConfig,
  {
    plugins: {
      prettier: prettier,
      react: react,
      'react-native': reactNative,
      'import-helpers': importHelpers
    },
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-native/no-unused-styles': 'error',
      'react-native/no-single-element-style-arrays': 'error',
      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'always',
          groups: [
            'module',
            'absolute',
            '/^@/',
            ['parent', 'sibling', 'index']
          ],
          alphabetize: { order: 'asc', ignoreCase: true }
        }
      ]
    }
  }
])
