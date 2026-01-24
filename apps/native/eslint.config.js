const expoConfig = require('eslint-config-expo/flat')
const importHelpersPlugin = require('eslint-plugin-import-helpers')
const prettier_eslint = require('eslint-plugin-prettier')
const react_eslint = require('eslint-plugin-react')
const react_native_eslint = require('eslint-plugin-react-native')
const typescript_eslint = require('@typescript-eslint/eslint-plugin')
const typescript_parser = require('@typescript-eslint/parser')
const { defineConfig } = require('eslint/config')

module.exports = defineConfig([
  expoConfig,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescript_parser
    },
    plugins: {
      prettier: prettier_eslint,
      react: react_eslint,
      'react-native': react_native_eslint,
      'import-helpers': importHelpersPlugin,
      '@typescript-eslint': typescript_eslint
    },
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-native/no-unused-styles': 'error',
      'react-native/no-single-element-style-arrays': 'error',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
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
