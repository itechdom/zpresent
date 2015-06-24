'use strict';

var gulp = require('gulp');

module.exports = function(options) {
gulp.task('watch', function(){
	var allPaths = [].concat(
		[paths.js],
		[paths.all],
		paths.html,
		[paths.styl]
	);
	gulp.watch(allPaths, ['webpack', reload]);
});
};
