let mix = require('laravel-mix');
let fs = require('fs');
let dotenv = require('dotenv');
let path = require('path');

mix.extend(
    'env',
    new class {
        register(env) {
            const file = path.resolve(env);
            const envConfig = dotenv.parse(fs.readFileSync(file));
            for (let k in envConfig) {
                process.env[k] = envConfig[k];
            }
        }
    }()
);