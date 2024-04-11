// TODO: husky 재정비
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'vitest.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/react-in-jsx-scope': 'off', // jsx, tsx 파일에 import React from 'react'; 를 추가해야하는 규칙
    'react/jsx-one-expression-per-line': 'off', // 정적 값과 동적 값을 같은 라인에서 사용하지 못하는 규칙
  },
  parserOptions: {
    project: ['./tsconfig.json'],
  },
};
