'use strict';

module.exports = {
	extends: ['stylelint-config-recommended'],
	customSyntax: 'postcss-scss',
	plugins: ['stylelint-scss'],
	rules: {
		'at-rule-no-unknown': null,
		'comment-no-empty': null,
		'no-invalid-position-at-import-rule': [
			true,
			{
				ignoreAtRules: ['use'],
			},
		],
		'scss/at-extend-no-missing-placeholder': true,
		'scss/at-if-no-null': true,
		'scss/at-import-no-partial-leading-underscore': true,
		'scss/at-import-partial-extension': 'never',
		'scss/at-rule-no-unknown': true,
		'scss/comment-no-empty': true,
		'scss/declaration-nested-properties-no-divided-groups': true,
		'scss/dollar-variable-no-missing-interpolation': true,
		'scss/function-quote-no-quoted-strings-inside': true,
		'scss/function-unquote-no-unquoted-strings-inside': true,
		'scss/no-duplicate-mixins': true,
		'scss/no-global-function-names': true,
		'scss/operator-no-newline-after': true,
		'scss/operator-no-newline-before': true,
		'scss/operator-no-unspaced': true,
	},
};
