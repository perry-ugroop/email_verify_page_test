import express from 'express';
import config from './config';
import viewUtils from './lib/view-utils';

const app = express();
const port = config.port;

app.get('/', (req, res) => {
  const page = viewUtils.load('index', 'main');
  res.send(page);
});

app.listen(port, () => console.log(`Listening on port ${port}...`));

