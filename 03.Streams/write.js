// Module to write to a text file.

var fs = require('fs');

var writeSync = function (filename, data) {
    // write to file synchronizely
    fs.writeFileSync(filename, JSON.stringify(data));
}

var write = function (filename, data) {
    // write to file synchronizely
    fs.writeFile(filename, JSON.stringify(data), (err) => {
        if (err)
            throw err;
    });
}

// exports 1 method for other modules or files to use
module.exports = {
    writeSync: writeSync,
    write
}