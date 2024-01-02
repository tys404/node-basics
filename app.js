import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';
import { rootDir } from './util/files.js';
import { render404 } from './controllers/error.js';

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(render404)

app.listen(3000);