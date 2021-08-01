module.exports = function(grunt){
    grunt.initConfig({
        concat: {
            js:{
                src:['js/*.js'],
                dest:'build/scripts.js'
            },
            css:{
                src:['css/*.css'],
                dest:'build/styles.css'
            }
        },
        uglify:{
            build:{
                src:'build/scripts.js',
                dest:'build/scripts.js'
            },
            
                src:'build/styles.css',
                dest:'build/styless.css'
                
            

        }

    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    
}