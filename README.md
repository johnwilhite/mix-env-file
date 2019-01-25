# mix-env-file
Allows [Laravel Mix](https://github.com/JeffreyWay/laravel-mix) to use to a specific .env file

By default mix only allows variables from a single file, `.env`, in the root of the project.  This simple plugin will override the environment varibles from `.env` with a specified env file.

This is especially useful when building locally or on a build server then deploying to different locations.

## Installation
```bash
$ npm install mix-env-file
```
or
```bash
$ yarn add mix-env-file
```

## Usage
Update scripts in `package.json` to include a `ENV_FILE` environment variable:

```js
"dev": "NODE_ENV=development ENV_FILE=./.env.test node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
```

Then in `webpack.mix.js` file, require `mix-env-file` after `laravel-mix`.

```js
let mix = require('laravel-mix');
require('mix-env-file');

// Then pass your file to this plugin
mix.env(process.env.ENV_FILE || '.env');

...
```

## License
MIT