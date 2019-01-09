import express from 'express';

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('<!DOCTYPE html><html><body><p>Hello, World!</p></body></html>');
});

app.listen(port, () => console.log(`Listening on port ${port}...`));

