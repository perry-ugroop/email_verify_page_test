import fs from 'fs';
import path from 'path';

const load = (viewPath) => {
  const absPath = path.join(__dirname, '..', 'views', `${viewPath}.html`);
  return fs.readFileSync(absPath, { encoding: 'utf-8' });
};

export default {
  load,
};
