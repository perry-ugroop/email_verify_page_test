import _ from 'lodash';

const strReplaceAll = (str, searchValue, replaceValue) => {
  return str.replace(new RegExp(_.escapeRegExp(searchValue), 'g'), replaceValue);
};

const makeQueryString = (parmHash) => {
  const pairs = [];

  for (let prop in parmHash) {
    if (typeof(parmHash[prop]) && typeof(parmHash[prop]) === 'string') {
      pairs.push(`${encodeURIComponent(prop)}=${encodeURIComponent(parmHash[prop])}`);
    }
  }

  return (pairs.length > 0 ? `?${pairs.join('&')}` : '');
};


export default {
  strReplaceAll,
  makeQueryString,
};