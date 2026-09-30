const http = require('http');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const marked = require('marked');

const readFile = promisify(fs.readFile);
const PORT = process.env.PORT || 3000;

const serveFile = async (filePath, res) => {
    try {
        const data = await readFile(filePath);
        const ext = path.extname(filePath).toLowerCase();
        let contentType = 'text/html';
        if (ext === '.css') contentType = 'text/css';
        if (ext === '.js') contentType = 'application/javascript';
        if (ext === '.json') contentType = 'application/json';
        if (ext === '.png') contentType = 'image/png';
        if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
        if (ext === '.svg') contentType = 'image/svg+xml';
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    } catch (err) {
        res.writeHead(404);
        res.end('Not found');
    }
};

const server = http.createServer(async (req, res) => {
    let url = new URL(req.url, `http://${req.headers.host}`);
    let pathname = url.pathname;

    // Normalize root to index.html
    if (pathname === '/') pathname = '/index.html';

    // Serve static files from public (same as repo root)
    if (pathname.startsWith('/posts/') && pathname.endsWith('.html')) {
        // Convert /posts/slug.html to /posts/slug.md
        const mdPath = path.join(__dirname, pathname.slice(0, -5) + '.md');
        try {
            const md = await readFile(mdPath, 'utf8');
            const html = marked.parse(md);
            // Wrap in minimal HTML template
            const fullHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Luan Trindade – Blog</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <div class="container">
        <article>
            ${html}
        </article>
        <a href="/blog.html" class="btn btn-secondary">← Back to Blog</a>
    </div>
</body>
</html>`;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(fullHtml);
        } catch (e) {
            res.writeHead(404);
            res.end('Post not found');
        }
        return;
    }

    // Serve posts.json
    if (pathname === '/posts.json') {
        return serveFile(path.join(__dirname, 'posts.json'), res);
    }

    // Serve static files
    const filePath = path.join(__dirname, pathname);
    serveFile(filePath, res);
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});