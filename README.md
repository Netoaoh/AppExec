# Appexec

## Description

Appexec is a simple script based on NodeJS that executes predefined commands written on a JSON file.

## How to use

Configure a JSON file with de commands that you want to run (see appexec.json on example folder), run appexec.js with the appropriated flags.

- -a or --app => Application group that you want to run
- -c or --command => Command especified on application group
- -p or --path Path => Custom path to appexec.json (Optional)
- -f or --flags Flags => Adicional flags that will be appended to the command (Optional)

## Dependencies

- NodeJS >= 8.3.0
- NPM >= 5.3.0

