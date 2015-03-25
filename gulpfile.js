'use strict';

var gulp = require('gulp');
var es = require('event-stream');

var concat = require('gulp-concat');
var babel = require('gulp-babel');
var less = require('gulp-less');
var order = require('gulp-order');
var header = require('gulp-header');
var wrap = require('gulp-wrap');
var watch = require('gulp-watch');
var connect = require('gulp-connect');
var openBrowser = require('gulp-open');

var pkg = require('./package.json');

var banner = [
  '<!--',
  '<%= pkg.name %> - <%= pkg.description %>',
  '@version v<%= pkg.version %>',
  '@link <%= pkg.homepage %>',
  '@license <%= pkg.license %>',
  '-->',
  ''
].join('\n');

function scripts() {
  return gulp.src('src/js/main.js')
    .pipe(babel())
    .on('error', log)
    .pipe(wrap('(function(){\n<%= contents %>\n}).call(this);'))
    .pipe(wrap('<script>\n<%= contents %>\n</script>'))
    .pipe(connect.reload());
}

function styles() {
  return gulp.src('src/less/**/*.less')
    .pipe(less())
    .on('error', log)
    .pipe(wrap('<style>\n<%= contents %>\n</style>'))
    .pipe(connect.reload());
}

function html() {
  return gulp.src('src/template/index.html')
    .pipe(connect.reload());
}

gulp.task('build', function () {
  return es.merge([
    html(),
    styles(),
    scripts()
  ])
  .pipe(order(['template.html', 'styles.css', 'scripts.js']))
  .pipe(concat('index.html'))
  .pipe(header(banner, {pkg: pkg}))
  .pipe(gulp.dest('dist'));
});

gulp.task('copy', function(){
  return gulp.src('./node_modules/forms-js/dist/forms-js.js')
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  return watch('{src,demo}/**/*.{js,less,html}', function(){
    gulp.start('build');
  });
});

gulp.task('connect', function() {
  return connect.server({
    port: 8123,
    root: '.',
    livereload: true
  });
});

gulp.task('open', function () {
  gulp.src('./demo/index.html')
  .pipe(openBrowser('', {
    url: 'http://localhost:8123/demo'
  }));
})

function log(error) {
  console.error(error.toString && error.toString());
}


gulp.task('default', ['build', 'copy']);
gulp.task('serve', ['default', 'watch', 'connect', 'open'])
