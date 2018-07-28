# Honey Badger
My Drupal 8 starter theme.

## To Get Started:

1. If they aren't already, make sure that node and npm (Node Package Manager) are [installed](http://blog.nodeknockout.com/post/65463770933/how-to-install-node-js-and-npm). If you are using a Mac, Homebrew is recommended for this.
2. If this is your first time ever using gulp, you will need to install it globally by running `npm install -g gulp` so that the terminal recognizes gulp commands.
3. The first time running this particular project, `cd` into this directory and type `npm install`
4. To continually watch .scss and .js files for changes, type `gulp` and use `ctrl + C` to stop.
5. To run a one-time compilation of .scss files, type `gulp scss`

## Guidelines:

* In general, all units should use the `px-to-rem()` described in scss/base/_functions.scss
* All styling should be done mobile-first. This repo contains a mixin for the `min-width` media query only, which in the vast majority of cases should be all you need.

## Grid:

* We have Susy 3 included in this repo. You can customize it as needed. See the documentation at [http://oddbird.net/susy/docs](http://oddbird.net/susy/docs)
* Unfortunately, Susy doesn't seem to want to play nicely with the sourcemaps, so we've commented them out of the gulpfile for the time being. If you're not using Susy, feel free to uncomment them.

### Generating Icons
* Add your icons to `images/icons/` and run the `gulp icons` task.
  This will optimize your SVGs and create an icon font with scss partial.
* Tip: If your icons seem tiny or invisible despite normal font sizes, make sure that none of the svg files have `width="100%"` and/or `height="100%"` on the `<svg>` tag.
