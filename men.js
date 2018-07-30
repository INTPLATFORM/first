

// .match('*in*')
const Filehound = require('filehound');

Filehound.create()
  .ext('java')
  .match('*TestRunnerNew.java*')
  .paths("./projectjava")
  .find((err, htmlFiles) => {
    if (err) return console.error("handle err", err);

    console.log(htmlFiles);
    var fs = require('fs');
 var stream = fs.createWriteStream(htmlFiles[0]);
 stream.once('open', function(fd) {
   stream.write("package com.zephyr.testrunner;\n\n");
   stream.write("import org.junit.runner.RunWith;\n\n");
   stream.write("import cucumber.api.CucumberOptions;\n");
   stream.write("import cucumber.api.junit.Cucumber;\n");
   stream.write("import cucumber.api.testng.AbstractTestNGCucumberTests;\n\n");
   stream.write("@RunWith(Cucumber.class)\n");
   stream.write("@CucumberOptions(features="+"{"+"\"Features/aabbbbbb:3\""+"},"+"\n\n");
   stream.write("//tags={"+"@Import1,@Export11,@Map1,@search1,@Edit1,@DND1"+"},\n\n");
   stream.write("glue={\"com.zaphyr.stepdefinition\"},\n");
   stream.write("plugin = {\"html:target/cucumber-html-report\",\n");
   stream.write("\"pretty:target/cucumber-pretty.txt,rerun:target/rerun.txt\",\n")
   stream.write("\"json:target/cucumber6.json\"},\n")
   stream.write("monochrome = false)\n\n")
   stream.write("public class TestRunnerNew extends AbstractTestNGCucumberTests\n")
   stream.write("{\n")
   stream.write("}\n")
   stream.end();
 });
 });

 

 //     var a = htmlFiles;
// console.log(a)
    //var fs = require('fs');
   // [ 'projectjava\\Sample1\\src\\test\\java\\com\\zephyr\\testrunner\\TestRunnerNew.java' ]
   //var replace = require("replace");

   // use:
   
//    replace({
//        regex: "aa",
//        replacement: "aabb",
//        paths: [htmlFiles[0]],
//        recursive: true,
//        silent: true,
//    });

// fs.appendFile( htmlFiles[0], 'shiva', function (err) {
//   if (err) throw err;
//   console.log('Replaced!');
// });

// var fs = require('fs');
//   var lineNumber;
//  var data = fs.readFileSync(htmlFiles[0]).toString().split("\n");
//  data.splice(lineNumber, 4, "Your String");
//  var text = data.join("\n");

//  fs.writeFile(htmlFiles[0], text, function (err) {
//    if (err) return console.log(err);
//  });
// var fs = require('fs')

// fs.readFile(htmlFiles[0], 'utf8', function(err, data)
// {
//     if (err)
//     {
//         // check and handle err
//     }
//     var linesExceptFirst = data.split('\n').slice(9,10).join('\n');
//     fs.writeFile(htmlFiles[0], linesExceptFirst);
// });