var gulp = require('gulp');
var webpack = require('gulp-webpack');
var named = require('vinyl-named');
var rename = require('gulp-rename');


gulp.task('js', function () {
	return gulp.src(['src/**/**.entry.js','spec/**/**.entry.js'])
		.pipe(named())
		.pipe(webpack({
			module: {
				noParse: [/bower_components/],
				loaders: [
					{
						test: /\.js$/,
						exclude: /node_modules|bower_components/,
						loader: 'babel-loader'
					}
				]
			}
		}))
		.pipe(rename(function (path) {
			path.basename = path.basename.replace('.entry', '.bundle');
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['js']);

gulp.task('watch', ['default'], function() {
	gulp.watch(['src/**/**.js', 'spec/**/**.js'], ['js']);
});
