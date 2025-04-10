// https://perfectionist.dev

import pluginPerfectionist from 'eslint-plugin-perfectionist'

/** @type {import("eslint").Linter.Config[]} */
export const perfectionist = [
  {
    name: 'perfectionist',
    plugins: {
      perfectionist: pluginPerfectionist,
    },
    settings: {
      perfectionist: {
        type: 'natural',
      },
    },
    rules: {
      'perfectionist/sort-named-exports': 'error',
      'perfectionist/sort-named-imports': 'error',
      'perfectionist/sort-exports': 'error',
      'perfectionist/sort-imports': [
        'error',
        {
          // specialCharacters: 'remove',
          internalPattern: ['^@/.*'],
          groups: [
            'top-type',
            'top',
            'type',
            ['builtin', 'external'],
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
          ],
          customGroups: {
            type: {
              'top-type': ['^react(.*)$', '^next(.*)$'],
            },
            value: {
              top: ['^react(.*)$', '^next(.*)$'],
            },
          },
        },
      ],
      'perfectionist/sort-jsx-props': [
        'error',
        {
          // Groups Order Reference:
          // * https://codeguide.co/#attribute-order
          // * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
          groups: [
            'class',
            'identity',
            'data',
            'unknown',
            'width&height',
            'a11y',
            'shorthand-prop',
            'callback',
          ],
          customGroups: [
            {
              groupName: 'class',
              elementNamePattern: '^className$',
            },
            {
              groupName: 'identity',
              elementNamePattern: ['^id$', '^name$'],
            },
            {
              groupName: 'data',
              elementNamePattern: '^data-.+',
            },
            {
              groupName: 'width&height',
              elementNamePattern: ['^width$', '^height$'],
            },
            {
              groupName: 'a11y',
              elementNamePattern: [
                '^alt$',
                '^aria-.+',
                '^autoFocus$',
                '^lang$',
                '^placeholder$',
                '^role$',
                '^tabIndex$',
                '^title$',
              ],
            },
            {
              groupName: 'callback',
              elementNamePattern: '^on.+',
            },
          ],
        },
      ],
    },
  },
]
