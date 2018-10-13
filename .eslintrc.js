'use strict';

module.exports = {
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			experimentalObjectRestSpread: true
		}
	},
	env: {
		node: true,
		es6: true,
		browser: true,
	},
	rules: {
		indent: ['error', 'tab', {
			SwitchCase: 1,
			FunctionDeclaration: {
				parameters: 1,
				body: 1
			},
			FunctionExpression: {
				parameters: 1,
				body: 1
			}
		}],
		'no-console': 0,
		'react/display-name': 0,
		'react/prop-types': 0
	}
};