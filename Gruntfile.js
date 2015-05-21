module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    responsive_images: {
        myTask: {
          options: {
            sizes: [{
              name: 'small',
              width: 100
            },{
              name: 'reg',
              width: 320,
              height: 240
            },{
              name: 'medium',
              width: 420,
              quality:60
            },{
              name: "large",
              width: 1170,
              quality: 60
            }]
          },
          files: [{
            expand: true,
            src: '*.jpg',
            cwd: 'images',
            
            dest: 'images/build/'
          }]
        }
      }
  });

  // Load the plugin that provides the "uglify" task.
  
  grunt.loadNpmTasks('grunt-responsive-images');
  // Default task(s).
  grunt.registerTask('default', ['responsive_images']);

};