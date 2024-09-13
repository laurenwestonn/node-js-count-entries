# Basics of creating Node project

- have node installed
- create a `js` file
- in terminal run with `node theFileName.js`

## How to take input

Arguments are sent like this example for the argument of "directory" and a value of "test": `node theFileName.js --directory=test`.

Lets read this value "test" using the `yargs` package.

- `npm i yargs` to add the package to read args. This will create `package.json` file and add `node_modules`

Lets use yargs:

```require('yargs').argv```

Now the command `node theFileName.js --directory=test` should populate the variable `yargs.directory`. Without the `.argv`, it'll be `undefined`.

### Other things you can do with yargs

```
const yargs = require('yargs')
  .usage('Usage: $0 --directory=[path to a directory]')
  .demand('directory')
  .alias('directory', 'd') 
  .describe('directory', 'the directory to count files within.')
  .argv
```
**usage** set a message when you get an error, to show up alongside the standard error. If you use `$0` you get the name of the file you're trying to run. `$1` does nothing.

**demand** if you don't supply the variable e.g. `--directory` you get an error

**alias** lets you use `-d` instead of `--directory`

**describe** describes what we're looking for from `--directory` for users when they write `--help`

**argv** required to extract the arguments from the yarg variable