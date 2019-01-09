import express from 'express';
import path from 'path';
import config from './config';
import viewUtils from './lib/view-utils';

const app = express();
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
  const page = viewUtils.load('index', 'main', { title: 'Index Page', currentYear: (new Date()).getFullYear() });
  res.send(page);
});

app.listen(config.port, () => console.log(`Listening on port ${config.port}...`));

