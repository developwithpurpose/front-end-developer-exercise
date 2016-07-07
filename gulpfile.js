var gulp = require('gulp');
var elixir = require('laravel-elixir');

elixir.config.assetsPath = './resources';
elixir.config.publicPath = './app';
elixir.config.js.outputFolder = 'assets/javascripts';
elixir.config.css.outputFolder = 'assets/stylesheets';

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
          './app/assets/stylesheets/main.css',
          './app/assets/javascripts/app.js',
          './app/assets/javascripts/bundle.js',
        ], elixir.config.publicPath);
      }
});
