import http from 'http';
import fs from 'fs';

const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile('public/index.html', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});