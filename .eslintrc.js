module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    extends: ['plugin:vue/recommended'],
    // add your custom rules here
    rules: {
        'vue/require-default-prop': 'off',
        'vue/return-in-computed-property': 'off',
        'vue/html-indent': [
            1,
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
    },
}
