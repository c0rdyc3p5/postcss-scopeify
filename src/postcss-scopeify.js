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
                const selector = rule.selector.replace(/\n/g, '');

                // If there are commas, we need to split the selector and scope each one
                if (selector.includes(',')) {
                    const selectors = selector.split(',');
                    const scopedSelectors = selectors.map((s) => {
                        if (exclude.some((e) => e.trim() === s.trim())) {
                            return s;
                        }
                        return opts.scope + s;
                    });
                    rule.selector = scopedSelectors.join(',');
                    return;
                } else if (exclude.some((e) => e.trim() === selector.trim())) {
                    return;
                }

                const prefix = opts.scope;
                rule.selector = prefix + selector;
            });
        }
    };
};

module.exports.postcss = true;