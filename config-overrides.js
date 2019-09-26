const path = require('path');
const {override, addWebpackAlias} = require('customize-cra');

module.exports = override(
    addWebpackAlias({
        ['erc']: path.resolve(__dirname, 'src')
    })
);

exports = module.exports;

exports.paths = function paths(paths, env) {
    // do stuff with paths
    return paths;
};
