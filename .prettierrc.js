module.exports = {
    trailingComma: 'all',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    arrowParens: 'always',
    bracketSpacing: true,
    jsxSingleQuote: true,
    overrides: [
        {
            files: '*.ts',
            options: {
                parser: 'typescript',
            },
        },
    ],
}
