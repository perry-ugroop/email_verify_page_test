import express from 'express';
import path from 'path';
import config from './config';
import viewUtils from './lib/view-utils';

const app = express();
app.use('/assets', express.static(path.join(__dirname, 'assets')));

const layoutVars = {
  title: 'Default Title',
  currentYear: (new Date()).getFullYear(),
};

app.get('/', (req, res) => {
  const page = viewUtils.load('index', 'main', { ...layoutVars, title: 'Index Page'});
  res.send(page);
});

app.get('/confirm/success', (req, res) => {
  const page = viewUtils.load('confirm/success', 'main', { ...layoutVars, title: 'Confirmation Success' });
  res.send(page);
});

app.listen(config.port, () => console.log(`Listening on port ${config.port}...`));

