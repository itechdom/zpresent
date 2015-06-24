// use our webpack.config.js to 
// build our modules
var gulp = require('gulp');
var webpack = require('gulp-webpack');

module.exports = function(options) {
gulp.task('webpack', function(){
	return gulp.src(options.src)
		.pipe(webpack(require('../webpack.config')))
		.pipe(gulp.dest(options.dist));
});
}
