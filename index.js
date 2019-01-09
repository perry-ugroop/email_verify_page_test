import express from 'express';
import viewUtils from './lib/view-utils';

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  const page = viewUtils.load('index', 'main');
  res.send(page);
});

app.listen(port, () => console.log(`Listening on port ${port}...`));

