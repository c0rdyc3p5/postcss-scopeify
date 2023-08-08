const postcss = require('postcss');
const postcssScopeify = require('../src/postcss-scopeify');
const fs = require('fs');

const css = fs.readFileSync("./tests/test.css", "utf8");

const options = {
    scope: '.my-scoped-rule ', // Set the prefix for scoping
    exclude: [':root', '.ignore-me'], // Optional: Exclude selectors from scoping
};

postcss([postcssScopeify(options)])
    .process(css, { from: undefined })
    .then((result) => {
        console.log(result.css);
    })
    .catch((error) => {
        console.error('Error:', error);
    });