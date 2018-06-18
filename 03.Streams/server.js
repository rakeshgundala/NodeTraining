const fs = require('fs');

// var writer = require('./write');
// var reader = require('./read.js'); // var reader = require('./read.js');

function writeSync(filename, data) {
    // write to file synchronizely
    fs.writeFileSync(filename, JSON.stringify(data));
};

writeSync('data.json', {
    "name": "Hello, John"
});

// console.log("1");
// writer.writeSync('dataSync.json', {
//     "name": "Hello, John Sync"
// });

// var content = new reader().readSync('dataSync.json');
// console.log(content);

// writer.write('data.json', {
//     "name": "Hello, John"
// });

// new reader().read('data.json', (content) => {
//     console.log(content);
// });