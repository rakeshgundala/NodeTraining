// Module to write to a text file.

var fs = require('fs');

class reader {

    readSync(filename) {

        var data = fs.readFileSync(filename);
        return JSON.parse(data);

    }

    read(filename, cb) {

        fs.readFile(filename, (err, data) => {
            if (err)
                conosle.log("Error reading file. " + err);
            else
                return cb(JSON.parse(data));
        });
    }
}
module.exports = reader;