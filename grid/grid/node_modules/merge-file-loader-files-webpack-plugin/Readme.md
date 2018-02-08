Merge File-loader Files Webpack Plugin
==========================

This is a plugin created to merge files created by **file-loader** into a single one. This can be files created from webpack regardless of original entry. It will delete those chunks and create a new one via the filepath option - as seen in the example.

This is a fork of https://github.com/jtefera/merge-text-webpack; it does the same thing in the same way (props!), but consumes Buffer files, the type of files created by file-loader.

# Use

Install:

```sh
npm install merge-file-loader-files-webpack-plugin --save-dev
```

or:

```sh
yarn add merge-file-loader-files-webpack-plugin --dev
```

Here's an example where I need all html files included in webpack to be consumed and available onload for caching:

```js
    var webpack = require('webpack');
    var path = require('path');
    var MergeFilesPlugin = require('merge-file-loader-files-webpack-plugin');

    module.exports = {
        entry: {
            'home-bundle': './home/entry.js',
            'accounts-bundle': './accounts/entry.js'
        },
        output: {
            path: path.join(__dirname, './dist/public'),
            filename: '[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name]-template.js",
                            }
                        },
                        {
                            loader: 'ng-cache-loader',
                            // Creates key value pairs for app to access template strings in Angular
                            // https://github.com/teux/ng-cache-loader,
                            // they must be available onload (before `ngModule.run`).
                            options: {
                                prefix: '[dir]/[dir]',
                                module: 'app'
                            }
                        }
                    ]
                }
            ]
        },
        new MergeFilesPlugin({
            filename: 'templates.js',
            test: 'template',
            deleteSourceFiles: true
        })
    }
```

The config object passed to MergeFilesPlugin admits:

+ **filename**: Final name of the file created by merging the files. The file will be saved in the output path. You can add extra path in front of the filename. Required. String.
+ **test**: Test applied to the different files created by webpack to see which should be merged, ie `header-template.js`, `hero-template.js` will be merged. `hero-body.js` will be ignored.
+ **deleteSourceFiles**: If true, `header-template.js` and `hero-template.js` will be deleted. If false, they will be created. If not specified, default is set to `true`.
