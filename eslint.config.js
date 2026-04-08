import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default [
  prettier,

  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },

    plugins: {
      '@typescript-eslint': tsPlugin,
      'simple-import-sort': simpleImportSort,
      import: importPlugin
    },

    settings: {
      'import/resolver': {
        typescript: {}
      }
    },

    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      'no-restricted-imports': [
        'error',
        {
          patterns: ['../../*', '../../../*', '../../../../*']
        }
      ]
    }
  }
]
