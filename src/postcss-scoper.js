/**
 * @type {import('postcss').PluginCreator}
 */
const postcssScoper = (opts = {}) => {
    if (!opts.scope) {
        throw new Error('You must provide a "scope" option to postcss-scoper');
    }

    const exclude = opts.exclude || [];

    return {
        postcssPlugin: 'postcss-scoper',
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

postcssScoper.postcss = true;

export default postcssScoper;