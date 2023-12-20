import http from 'http';
import express from 'express';

const app = express();

app.use((req, res, next) => {

    next();
});

app.use((req, res, next) => {
    res.send('<h1>Welcome!</h1>');
});

const server = http.createServer(app);

server.listen(3000);