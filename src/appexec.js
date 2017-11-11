#!/usr/bin/env node

const fs = require('fs');
const shell = require('shelljs');
const program = require('commander');

program.version('1.0.0')
.option('-a, --app [type]', 'Application')
.option('-c, --command [type]', 'Command', 'default')
.option('-p, --path [type]', 'Path', '')
.option('-f, --flags [type]', 'Flags', '')
.parse(process.argv);

var shouldRun = true;

if (!program.app){
    console.log("No application especified.");
    shouldRun = false;
} 

if(shouldRun) {
    var filePath = "";
    if (program.path != ""){
        filePath = program.path;
    } else {
        filePath = process.env.HOME;
    }

    console.log("==================================");
    console.log("");
    console.log("=========> Parsing appexec file...");

    var obj = JSON.parse(fs.readFileSync(filePath + '/appexec.json', 'utf8'));

    if(obj[program.app] != undefined){
        if(program.flags){
            obj[program.app][program.command] += program.flags;
        }

        execCommand(obj[program.app][program.command]);
    } else {
        console.log("=========> Application not found on appexec.json.");
        console.log("");
        console.log("==================================");
    }
}

function execCommand(cmd){
    console.log("=========> Executing command...");
    console.log("");
    console.log(cmd);
    console.log("");

    shell.exec(cmd, { silent: true },function(code, stdout, stderr) {
        console.log("=========> Command Executed...");
        console.log("");
        console.log('Exit code:', code);
        console.log('Program output:', stdout);
        console.log('Program stderr:', stderr);
        console.log("==================================");
    });
}