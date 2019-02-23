const neat = require("bourbon-neat").includePaths;
var config = {};

config.app = "app/"; // The files Jekyll will work on
config.dist = "dist/"; // The resulting static site
config.assets = "app/_assets/"; // The files Gulp will work on
config.nodedir = "node_modules"; // npm directory for any external linked files

config.browsersync = {
  server: {
    baseDir: config.dist
  },
  // Don't show any notifications in the browser.
  notify: false
};

config.images = {
  src: `${config.assets}images/**/*`,
  dest: {
    jekyll: `${config.dist}assets/images/`,
    app: `${config.app}assets/images/`
  }
};

config.scripts = {
  src: `${config.assets}scripts/main.js`,
  dest: {
    jekyll: `${config.dist}assets`,
    app: `${config.app}assets`
  }
};

config.styles = {
  src: `${config.assets}styles/styles.scss`,
  dest: {
    jekyll: `${config.dist}assets`,
    app: `${config.app}assets`
  },

  includePaths: [
    `${config.assets}styles`,
    `${config.nodedir}/normalize.css`,
    `${config.nodedir}/breakpoint-sass/stylesheets`,
    `${config.nodedir}/vex-js/sass`,
    neat
  ],

  autoprefixer: {
    browsers: [
      "last 2 versions",
      "safari 5",
      "ie 8",
      "ie 9",
      "opera 12.1",
      "ios 6",
      "android 4"
    ],
    cascade: true
  }
};

config.svg = {
  src: `${config.assets}svg/**/*`,
  dest: {
    app: `${config.app}_includes`,
    fallback: `${config.dist}assets/images/png_fallback`
  },
  fallbackdest: `${config.dist}assets/images/png_fallback/`,
  options: {
    svg: {
      xmlDeclaration: false,
      doctypeDeclaration: false
    },

    mode: {
      inline: true, // Prepare for inline embedding
      symbol: true // Create a «symbol» sprite
    }
  }
};

config.watch = {
  styles: `${config.assets}styles/**/*.+(sass|scss)`,
  scripts: `${config.assets}scripts/**/*.js`,
  images: `${config.assets}images/**/*.+(jpg|png|jpeg|gif)`,
  jekyll: [
    `${config.app}_config.yml`,
    `${config.app}_layouts/*`,
    `${config.app}_includes/*`,
    `${config.app}_data/*.+(yml|yaml|csv|json)`,
    `${config.app}**/*.html`,
    `${config.app}**/*.md`,
    `!dist/**/*.*`
  ]
};

config.jekyll = {
  paths: [
    `${config.app}_config.yml`,
    `${config.app}_layouts/*`,
    `${config.app}_includes/*`,
    `${config.app}_data/*.+(yml|yaml|csv|json)`,
    `${config.app}**/*.html`,
    `${config.app}**/*.md`,
    `!${config.dist}**/*.*`,
    `${config.app}_projects/*`,
    `${config.app}_team/*`
  ]
};

module.exports = config;
