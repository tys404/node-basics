import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';
import rootDir from './util/path.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})

app.listen(3000);