const rewireSass = require('react-app-rewire-scss');

module.exports = function override(config, env) {
  config = rewireSass(config, env);

  config.resolve.alias = Object.assign(config.resolve.alias, {
     "../../node_modules/shards-ui": "shards-ui",
   });

  return config;
}
