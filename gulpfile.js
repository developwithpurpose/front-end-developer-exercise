var gulp = require('gulp');
var elixir = require('laravel-elixir');

elixir.config.assetsPath = './resources';
elixir.config.publicPath = './app';
elixir.config.js.outputFolder = 'javascripts';
elixir.config.css.outputFolder = 'stylesheets';

elixir(function(mix) {

    mix.sass('main.scss')
      .scripts('app.js')
      .browserify('bundle.js')
      .browserSync({
        server: { baseDir: './app' },
        proxy: null,
        files: [ './app/**/*' ]
      });

      if(elixir.config.production)
      {
        mix.version([
          './app/css/main.css',
          './app/js/app.js',
          './app/js/bundle.js',
        ], elixir.config.publicPath);
      }
});
