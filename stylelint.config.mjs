export default {
  extends: ['stylelint-config-standard'],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'layer', 'variants', 'responsive', 'screen'],
      },
    ],
    'alpha-value-notation': null,
    'color-function-alias-notation': null,
    'color-function-notation': null,
    'media-feature-range-notation': null,
    'property-no-deprecated': null,
    'rule-empty-line-before': null,
    'selector-class-pattern': null,
    'value-keyword-case': null,
    'keyframes-name-pattern': null,
  },
}
