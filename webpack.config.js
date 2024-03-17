const path = require('path');

module.exports = {
    mode: 'production',
    entry: './ytb-adds-skipper/content.js',
    output: {
        filename: 'content_bundle.js',
        path: path.resolve(__dirname, 'ytb-adds-skipper/dist'),
    },
    devtool: 'cheap-module-source-map',
};
