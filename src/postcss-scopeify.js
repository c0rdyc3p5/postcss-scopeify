/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = (opts = {}) => {
    if (!opts.scope) {
        throw new Error('You must provide a "scope" option to postcss-scopeify');
    }

    const exclude = opts.exclude || [];

    return {
        postcssPlugin: 'postcss-scopeify',
        Root(root) {
            root.walkRules((rule) => {
                const selector = rule.selector;
                if (exclude.some((e) => e.trim() === selector.trim())) {
                    return;
                }
                const prefix = opts.scope;
                rule.selector = prefix + selector;
            });
        }
    };
};

module.exports.postcss = true;