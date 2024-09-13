const fs = require('fs').promises; // use the promisified fs module
const path = require('path');

async function countEntries(givenPath) {
    try {
        const resolvedPath = path.resolve(givenPath);
        const contents = await fs.readdir(resolvedPath);
        return contents;
    } catch (error) {
        throw new Error('Struggled to find the path ' + givenPath);
    }
}

module.exports = countEntries;