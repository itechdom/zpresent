var gulp	 		= require('gulp'),
		webpack		= require('gulp-webpack'),
		path			= require('path'),
		sync			= require('run-sequence'),
		serve			= require('browser-sync'),
		rename		= require('gulp-rename'),
		template	= require('gulp-template'),
		fs				= require('fs'),
		yargs			= require('yargs').argv,
		lodash 		= require('lodash'),
		reload		= function () { return serve.reload()},
		data = require('gulp-data'),
		 gutil = require('gulp-util'),
		markdown = require('gulp-markdown-to-json');
		fm = require('front-matter');
		flatten = require('flat');


// helper method to resolveToApp paths
var resolveToApp = function(glob){
	glob = glob || '';
	return path.join( 'app', glob); // app/{glob}
};

var resolveToComponents = function(glob){
	glob = glob || '';
	return path.join('app/components', glob); // app/components/{glob}
};


// map of all our paths
var paths = {
	js: resolveToComponents('**/*!(.spec.js).js'), // don't include spec files
	all: resolveToApp('**/*.js'),
	styl: resolveToApp('**/*.styl'), // our stylus files
	html: [
		resolveToApp('**/*.html'),
		path.join('index.html')
	],
	entry: path.join('app/app.js'),
	output: "./",
	blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**')
};

//this task is responsible for looking
gulp.task('buildSlides',function(){
	return gulp.src('../material/**/*.md')
		.pipe(gutil.buffer())
		.pipe(markdown('slides.json'))
		.pipe(gulp.dest('../'))
		.pipe(gulp.dest('./'));
});

gulp.task('mindmap',function(){
	gulp.src('../mindmaps/javascript.json')
	.pipe(data(function(file){
	content = String(file.contents);
	object = JSON.parse(content)
	return object;
	})).pipe(gulp.dest('./hello'));
});
// use our webpack.config.js to 
// build our modules
gulp.task('webpack', function(){
	return gulp.src(paths.entry)
		.pipe(webpack(require('./webpack.config')))
		.pipe(gulp.dest(paths.output));
});


gulp.task('serve', function(){
	serve({
		port: process.env.PORT || 3000,
		open: false,
		server: {
			baseDir: "./"
		}
	});
});


gulp.task('watch', function(){
	var allPaths = [].concat(
		[paths.js],
		[paths.all],
		paths.html,
		[paths.styl]
	);
	gulp.watch(allPaths, ['webpack', reload]);
});

//todo: add a generator for different slides?
//gulp.task('component', function(){
//	var cap = function(val){
//		return val.charAt(0).toUpperCase() + val.slice(1);
//	};
//
//	var name = yargs.name;
//	var parentPath = yargs.parent || '';
//	var destPath = path.join(resolveToComponents(), parentPath, name);
//
//	return gulp.src(paths.blankTemplates)
//		.pipe(template({
//			name: name,
//			upCaseName: cap(name)
//		}))
//		.pipe(rename(function(path){
//			path.basename = path.basename.replace('temp', name);
//		}))
//		.pipe(gulp.dest(destPath));
//});

gulp.task('default', function(done){
	sync('webpack', 'serve', 'watch', done);
});
