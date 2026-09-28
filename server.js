const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const serveFile = (filePath, res) => {
    let contentType = 'text/html';
    if (filePath.endsWith('.css')) contentType = 'text/css';
    if (filePath.endsWith('.js')) contentType = 'application/javascript';
    if (filePath.endsWith('.json')) contentType = 'application/json';
    if (filePath.endsWith('.png')) contentType = 'image/png';
    if (filePath.endsWith('.jpg')) contentType = 'image/jpeg';

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading file');
        }
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
};

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    // prevent directory traversal
    console.log('Requested:', req.url);
    console.log('FilePath:', filePath);
    const absolutePath = path.resolve(filePath);
    if (!absolutePath.startsWith(path.resolve(__dirname))) {
        res.writeHead(403);
        return res.end('Forbidden');
    }
    serveFile(filePath, res);
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});