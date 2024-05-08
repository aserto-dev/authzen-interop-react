const defaultConfigs = require('@aserto/ts-linting-configs')

const reactHooksExhaustiveDeps = defaultConfigs.rules['react-hooks/exhaustive-deps']
const reactHooksExhaustiveDepsLevel = Array.isArray(reactHooksExhaustiveDeps)
  ? reactHooksExhaustiveDeps[0]
  : reactHooksExhaustiveDeps

module.exports = {
  ...defaultConfigs,
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    ...defaultConfigs.rules,
    'react-hooks/exhaustive-deps': [
      reactHooksExhaustiveDepsLevel,
      {
        additionalHooks: 'useInputFocusRef',
      },
    ],
    'react/jsx-key': ['warn', { checkFragmentShorthand: true }],
    '@typescript-eslint/naming-convention': defaultConfigs.rules[
      '@typescript-eslint/naming-convention'
    ].filter((rule) => rule.selector !== 'property'),
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: { '{}': false },
      },
    ],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        fixToUnknown: true,
      },
    ],
    'no-restricted-globals': [
      'error',
      { name: 'history', message: 'Use `useHistory` from `src/services/HistoryProvider` instead' },
    ],
    '@typescript-eslint/no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'history',
            message: 'Use `useHistory` from `src/services/HistoryProvider` instead',
          },
          {
            name: '@auth0/auth0-react',
            message: 'Use `useIdentity` from `src/services/IdentityProvider` instead',
          },
        ],
        patterns: [
          {
            group: '**/types/graphql/*generated.ts',
            message:
              'Import from src/api/tenantDirectory.ts instead. This avoids direct dependencies on generated code.',
          },
        ],
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
}
