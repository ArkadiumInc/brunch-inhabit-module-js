module.exports = {
  modules: {
    autoRequire: {
      'my-module.js': [ 'my-module.js' ]
    }
  },
  files: {
    javascripts: {
      joinTo: 'my-module.js'
    }
  },
  plugins: {
    babel: {presets: ['es2015']},
    text: { pattern: /\.hbs$/ }
  }
};
