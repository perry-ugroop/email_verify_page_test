import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import genUtils from './gen-utils';

const load = (viewPath, layoutPath, vars) => {
  let result;

  const absViewPath = path.join(__dirname, '..', 'views', `${viewPath}.html`);
  result = fs.readFileSync(absViewPath, { encoding: 'utf-8' });

  if (layoutPath) {
    const absLayoutPath = path.join(__dirname, '..', 'layouts', `${layoutPath}.html`);
    const layout = fs.readFileSync(absLayoutPath, { encoding: 'utf-8' });

    result = genUtils.strReplaceAll(layout, '%@_CONTENT%', result);
  }

  if (vars && typeof(vars) === 'object') {
    for (let varProp in vars) {
      let val = '';

      if (vars[varProp]) {
        if (typeof(vars[varProp]) === 'string' || typeof(vars[varProp]) === 'number') {
          val = `${vars[varProp]}`;
        }
      }

      result = genUtils.strReplaceAll(result, `%${varProp}%`, _.escape(val));
    }
  }

  result = genUtils.strReplaceAll(result, '{_PERCENT}', '%');
  result = genUtils.strReplaceAll(result, '{_LBRACE}', '{');
  result = genUtils.strReplaceAll(result, '{_RBRACE}', '}');

  return result;
};

export default {
  load,
};
