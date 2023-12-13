// Put "type": "module" in package.json to allow for ES6 imports.
import http from 'http';


// Create server function reveives request listener.
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);


    // To send a response use functions from res object.
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> Hello World</title></head>');
    res.write('<body>Woooha</body>');
    res.write('</html>');


    // After res.end() you can't write anything else.
    res.end();
});


// Run server by executing `listen` function.
server.listen(3000);