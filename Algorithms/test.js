// var javaInit = require('./javaInit');
// var java = javaInit.getJavaInstance();

var fs = require('fs');
var java = require('java');
var baseDir = './Java';
var dependencies = fs.readdirSync(baseDir);

dependencies.forEach(function (dependency) {
	java.classpath.push(baseDir + '/' + dependency);
});
java.classpath.push('./Java/target/classes');
java.classpath.push('./Java/target/test-classes');