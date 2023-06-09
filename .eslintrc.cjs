module.exports = {
    env: { browser: true, es2020: true, node: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/jsx-runtime',
        'plugin:prettier/recommended',
        'prettier',
    ],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'off',
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        indent: 'off',
        'lines-around-comment': [
            'error',
            {
                beforeBlockComment: true,
                afterBlockComment: true,
                beforeLineComment: true,
                afterLineComment: true,
                allowBlockStart: true,
                allowBlockEnd: true,
                allowObjectStart: true,
                allowObjectEnd: true,
                allowArrayStart: true,
                allowArrayEnd: true,
            },
        ],
    },
};
