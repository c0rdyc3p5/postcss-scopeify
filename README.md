# PostCSS-Scopeify

PostCSS-Scopeify is a PostCSS plugin that allows you to scope CSS selectors with a specified prefix, ensuring style isolation and modularity. Prevent selector conflicts and improve maintainability of your CSS with this powerful tool!

## Installation

To use PostCSS-Scopeify, first install it via npm or yarn:

```bash
npm install postcss postcss-scopeify --save-dev
```

## Testing

```bash
npm run test
```

## Usage
To use PostCSS-Scopeify, you'll need to set up PostCSS in your project. Create a `postcss.config.js` file in the root of your project and add postcss-scopeify to the plugins list.

Here's a basic example of how to use PostCSS-Scopeify:
```javascript
// postcss.config.js
module.exports = {
    plugins: [
        // Nesting/Import/StylesLibrary PostCSS plugins here...
        require('postcss-scopeify')({
            scope: '.my-scoped-rule ', // Set the prefix for scoping
            exclude: [':root', '.ignore-me'], // Optional: Exclude selectors from scoping
        }),
        // Minification PostCSS plugins here...
    ],
};
```
OR
```javascript
// postcss.config.js
module.exports = {
    plugins: {
        // Nesting/Import/StylesLibrary PostCSS plugins here...
        "postcss-scopeify": {
            scope: '.my-scoped-rule ', // Set the prefix for scoping
            exclude: [':root', '.ignore-me'], // Optional: Exclude selectors from scoping
        },
        // Minification PostCSS plugins here...
    }
}
```

### Example 1 - Basic Usage:

```css
/* Input CSS */
.button {
    background-color: #3498db;
    color: #fff;
}

/* Output CSS */
.my-scoped-rule .button {
    background-color: #3498db;
    color: #fff;
}
```

### Example 2 - Excluding Selectors:

```css
/* Input CSS */
.button {
    background-color: #3498db;
    color: #fff;
}

/* Excluded Selector */
.ignore-me {
    display: none;
}

/* Output CSS */
.my-scoped-rule .button {
    background-color: #3498db;
    color: #fff;
}

/* No scoping applied to the excluded selector */
.ignore-me {
    display: none;
}
```

### Example 3 - State Selectors:

```css
/* Input CSS */
.button {
    background-color: #3498db;
    color: #fff;
}

.button:hover {
    background-color: #2980b9;
}

/* Output CSS */
.my-scoped-rule .button {
    background-color: #3498db;
    color: #fff;
}

.my-scoped-rule .button:hover {
    background-color: #2980b9;
}
```

### Example 4 - Chained Selectors:

```css
/* Input CSS */
.header .nav .link {
    color: #333;
}

/* Output CSS */
.my-scoped-rule .header .nav .link {
    color: #333;
}
```

### Example 5 - Media Queries:

```css
/* Input CSS */
@media screen and (max-width: 1240px) {
    .container {
        width: 100%;
    }

    .container .item {
        width: 100%;
    }

    .container .item .item-content {
        width: 100%;
    }
}

/* Output CSS */
@media screen and (max-width: 1240px) {
    .my-scoped-rule .container {
        width: 100%;
    }

    .my-scoped-rule .container .item {
        width: 100%;
    }

    .my-scoped-rule .container .item .item-content {
        width: 100%;
    }
}
```

## Contributing
Contributions are welcome! If you encounter any issues or have suggestions for improvements, feel free to create an issue or submit a pull request.

## License
This project is licensed under the [MIT License](https://github.com/c0rdyc3p5/postcss-scopeify/blob/main/LICENSE).