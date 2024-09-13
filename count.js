#!/usr/bin/env node

const countEntries = require('./lib/countEntries');

const yargs = require('yargs')
    .usage('You need to provide the --directory value for $0') 
    .demand('directory')
    
    .alias('directory', 'd')
    .argv;

console.log(countEntries(yargs.directory));