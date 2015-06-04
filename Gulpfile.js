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
		data = require('gulp-data');

var root = 'client';


// helper method to resolveToApp paths
var resolveToApp = function(glob){
	glob = glob || '';
	return path.join(root, 'app', glob); // app/{glob}
};

var resolveToComponents = function(glob){
	glob = glob || '';
	return path.join(root, 'app/components', glob); // app/components/{glob}
};


// map of all our paths
var paths = {
	js: resolveToComponents('**/*!(.spec.js).js'), // don't include spec files
	all: resolveToApp('**/*.js'),
	styl: resolveToApp('**/*.styl'), // our stylus files
	html: [
		resolveToApp('**/*.html'),
		path.join(root, 'index.html')
	],
	entry: path.join(root, 'app/app.js'),
	output: root,
	blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**')
};

//this task is responsible for looking
gulp.task('buildSlides',function(){
	var slides = [];

	//return gulp.src('client/slides/*')
	//	.pipe(data(function(file) {
	//		return file
	//	}))
	//	.pipe(gulp.dest('slides'));
	fs.readdir('client/slides',function(err,files){
		console.log(err);
		slides = files;
		console.log(slides);
		var writeStream = fs.createWriteStream('client/slides.json',{flags:'r+'});
		slides.forEach(function(slide,index){
			if(index == 0){
				writeStream.write('[ \n');
			}
			writeStream.write('"'+slide+'", \n');
			if(slides.length-1 == index){
				writeStream.write(']');
			}
		});
	});

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
			baseDir: root
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