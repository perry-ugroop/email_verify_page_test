import _ from 'lodash';

const strReplaceAll = (str, searchValue, replaceValue) => {
  return str.replace(new RegExp(_.escapeRegExp(searchValue), 'g'), replaceValue);
};

export default {
  strReplaceAll,
};