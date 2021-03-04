let mix = require('laravel-mix');
let fs = require('fs');
let dotenv = require('dotenv');
let path = require('path');

mix.extend(
    'env',
    new class {
        register(env) {
            if (env) {
                const file = path.resolve(env);

                let envConfig;
                try {
                    envConfig = dotenv.parse(fs.readFileSync(file));
                } catch (error) {
                    console.error('Unable to parse env file at ' + file + '\r\nPlease make sure this file exists and is formatted correctly.');
                    process.exit();
                }
                
                let reference = /\$\{([^\}]+)\}/;

                for (let k in envConfig) {
                    let ref = envConfig[k].match(reference);
                    if (ref && ref[1] && envConfig[ref[1]]) {
                        process.env[k] = envConfig[ref[1]];
                    } else {
                        process.env[k] = envConfig[k];
                    }
                }
            }
        }
    }()
);
