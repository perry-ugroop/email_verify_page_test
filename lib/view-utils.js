import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const load = (viewPath, layoutPath, vars) => {
  let result;

  const absViewPath = path.join(__dirname, '..', 'views', `${viewPath}.html`);
  result = fs.readFileSync(absViewPath, { encoding: 'utf-8' });

  if (layoutPath) {
    const absLayoutPath = path.join(__dirname, '..', 'layouts', `${layoutPath}.html`);
    const layout = fs.readFileSync(absLayoutPath, { encoding: 'utf-8' });

    result = layout.replace('%_CONTENT%', result);
  }

  if (vars && typeof(vars) === 'object') {
    for (let varProp in vars) {
      let val = '';

      if (vars[varProp]) {
        if (typeof(vars[varProp]) === 'string' || typeof(vars[varProp]) === 'number') {
          val = `${vars[varProp]}`;
        }
      }

      result = result.replace(`%${varProp}%`, _.escape(val));
    }
  }

  result = result.replace('{_PERCENT}', '%');
  result = result.replace('{_LBRACE}', '{');
  result = result.replace('{_RBRACE}', '}');

  return result;
};

export default {
  load,
};
