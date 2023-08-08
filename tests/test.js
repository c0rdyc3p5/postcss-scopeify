import postcss from "postcss";
import postcssScopeify from "../src/postcss-scopeify.js";
import * as fs from "fs";

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