const nxEslintPlugin = require('@nx/eslint-plugin');
const ts = require('@typescript-eslint/eslint-plugin');
const parser = require('@typescript-eslint/parser');
const jsoncParser = require('jsonc-eslint-parser');
const globals = require('globals');
const importPlugin = require('eslint-plugin-import');

module.exports = [
    importPlugin.flatConfigs.recommended,
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: parser,
            parserOptions: {
                project: './tsconfig.base.json',
                tsconfigRootDir: __dirname,
                ecmaVersion: 2022,
                sourceType: 'module'
            },
            globals: {
                ...globals.node
            },
        },
        plugins: {
            '@typescript-eslint': ts,
            '@nx': nxEslintPlugin,
        },
        settings: {
            'import/resolver': {
                typescript: {
                    project: './tsconfig.base.json',
                    alwaysTryTypes: true,
                },
            },
        },
        rules: {
            ...ts.configs.recommended.rules,
            ...ts.configs.strict.rules,
            '@nx/enforce-module-boundaries': [
                'error',
                {
                    enforceBuildableLibDependency: true,
                    allow: [],
                    depConstraints: [
                        {
                            sourceTag: '*',
                            onlyDependOnLibsWithTags: ['*'],
                        },
                    ],
                },
            ],
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/no-misused-promises': 'error',
            '@typescript-eslint/await-thenable': 'error',
            'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
            'padded-blocks': ['error', 'never'],
            'no-trailing-spaces': 'error',
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: 'function',
                    format: ['camelCase', 'PascalCase']
                },
                {
                    selector: 'typeAlias',
                    format: ['PascalCase']
                },
            ]
        },
    },
    {
        files: ['*.json', '*.json5'],
        languageOptions: {
            parser: jsoncParser,
        },
    },
    {
        ignores: [
            '**/*.config.js',
            '**/playwright-report/**',
            'node_modules',
            'dist',
            'coverage'
        ],
    },
];