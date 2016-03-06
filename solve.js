var fs = require('fs');
var os = require('os');

var args = process.argv.slice(2);
var problemName = `rosalind_${args[0]}`;
var problemSolver = require(`./${problemName}`);
var downloadsDirectory = `${os.homedir()}/Downloads/`;

if (args[1]) {
    downloadsDirectory = `${os.homedir()}${args[1]}/`;
};

var problemFile = `${downloadsDirectory}${problemName}.txt`;
var data = fs.readFileSync(problemFile, {encoding: "utf8"});

console.log(problemSolver(data));
