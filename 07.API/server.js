var http = require('http');
var port = 8180;

function get_request(response) {
    response.writeHead(200, {
        'content-type': 'text/plain'
    });
    response.end('Get Action was requested');
}

function post_request(res) {
    res.writeHead(200, {
        'content-type': 'text/plain'
    });
    res.end('Post Action was requested');
}

function bad_request(res) {

    res.writeHead(400, {
        'content-type': 'text/plain'
    });
    res.end('bad request?');

}

function requestHandler(req, res) {

    if (req.method === 'GET') {
        get_request(res)
    } else if (req.method === 'POST') {
        post_request(res)
    } else {
        bad_request(res);
    }

}

http.createServer(requestHandler).listen(port, '127.0.0.1');

console.log('Started Node @ https://127.0.0.1:' + port);
