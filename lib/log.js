async function log(methodToAwait) { 
    try {
        console.log(await methodToAwait);
    } catch {
        throw new Error('Failed to log method');
    }
}

module.exports = log;