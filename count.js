#!/usr/bin/env node

const countEntries = require('./lib/countEntries');
const log = require('./lib/log');

const yargs = require('yargs')
    .usage('You need to provide the --directory value for $0') 
    .demand('directory')
    .alias('directory', 'd')
    .argv;

log(countEntries(yargs.directory));
