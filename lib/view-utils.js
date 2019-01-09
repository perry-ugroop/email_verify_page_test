import fs from 'fs';
import path from 'path';

const load = (viewPath, layoutPath) => {
  let result;

  const absViewPath = path.join(__dirname, '..', 'views', `${viewPath}.html`);
  result = fs.readFileSync(absViewPath, { encoding: 'utf-8' });

  if (layoutPath) {
    const absLayoutPath = path.join(__dirname, '..', 'layouts', `${layoutPath}.html`);
    const layout = fs.readFileSync(absLayoutPath, { encoding: 'utf-8' });

    result = layout.replace(/<!--\s+%_CONTENT%\s+-->/, result);
  }

  return result;
};

export default {
  load,
};
