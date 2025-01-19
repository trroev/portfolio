import typescriptParser from '@typescript-eslint/parser'
import eslintConfigPrettier from 'eslint-config-prettier'
import unusedImports from 'eslint-plugin-unused-imports'

/** @typedef {import('eslint').Linter.Config} Config */

/** @type {Config[]} */
const eslintConfig = [
  {
    ignores: ['**/.next', '**/dist', '**/pnpm-lock.yaml', '**/next-env.d.ts'],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      sourceType: 'module',
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    name: 'Settings',
    plugins: {
      'unused-imports': unusedImports,
    },
  },
  eslintConfigPrettier,
]

export default eslintConfig
