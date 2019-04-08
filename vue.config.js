const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const components = require('./components.json')
const entrys = {}
Object.keys(components).forEach(c => {
    entrys[c] = components[c]
})

module.exports = {
    outputDir: 'lib',
    filenameHashing: false,
    configureWebpack: {
        entry: entrys,
        plugins: [
            new MiniCssExtractPlugin({
                filename: '/theme/[name].css',
            }),
        ],
    },
}
