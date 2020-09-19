var gulp = require('gulp')
var nodemon = require('gulp-nodemon')
var build = require('gulp-build')

gulp.task('nodemon', function () {
  nodemon({
    script: 'ESB.js',
    ext: 'js',
    ignore: ['dist/']
  })
    .on('start', function () {
      console.log('>> node restart')
    })
})

gulp.task('build', function () {
  gulp.src('ESB.js')
    .pipe(build({ GA_ID: '123456' }))
    .pipe(gulp.dest('dist'))
})
