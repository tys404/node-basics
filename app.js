import express from 'express';

const app = express();

app.use((req, res, next) => {

    next();
});

app.use((req, res, next) => {
    res.send('<h1>Welcome!</h1>');
});

app.listen();