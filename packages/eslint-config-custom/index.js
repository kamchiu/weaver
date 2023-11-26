import antfu from "@antfu/eslint-config"

export default await antfu({
  ignores: ['**/*.json', 'dist', 'node_modules', '.turbo', '.nuxt', 'public', '.output', '!.storybook'],
  rules: {
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        'pathGroupsExcludedImportTypes': ['vue'],
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'pathGroups': [
          {
            pattern: '@ui/**',
            group: 'internal',
            position: 'before',
          },
        ],
      },
    ],
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
  },
});
