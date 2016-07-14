module.exports = function(gulp, plugins, config) {
	return function() {
		return gulp.src(config.svg.src)
		.pipe(plugins.svg2png({width: 100, height: 100}, true))
		.pipe(gulp.dest('dist/assets/images/png_fallback'));
	}
};
