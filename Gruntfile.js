module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // read Package.json
    pkg: grunt.file.readJSON('package.json'),

    // -----------------------------
    // Browserify
    // -----------------------------

    browserify: {
      core: {
        options: {
          transform:[["babelify", { "presets": ["es2015"] }]],
        },
        src: 'src/index.js',
        dest: 'build/numbers.js',
      },
    },

    // -----------------------------
    // Uglify
    // -----------------------------

    uglify: {
      core: {
        files: {
          './build/numbers.min.js': ['./build/numbers.js'],
        }
      }
    },

    // -----------------------------
    // Watch
    // -----------------------------

    watch: {
      scripts: {
        files: ['index.js', 'Gruntfile.js', './src/**/*.js'],
        tasks: ['build'],
        options: {
          spawn: false,
        },
      },
    },

    // -----------------------------
    // JSHint
    // -----------------------------

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: ['./index.js', './src/**/*.js'],
      },
    },

    // -----------------------------
    // Mocha
    // -----------------------------

    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          require: ['babel-core/register']
        },
        src: ['./tests/**/*.js']
      }
    },

  });

  // Load the Plugins
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');

  // Task(s)
  grunt.registerTask('build', ['jshint', 'mochaTest', 'browserify', 'uglify']);
  grunt.registerTask('serve', ['build', 'watch']);

};
