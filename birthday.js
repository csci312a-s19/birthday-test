const moment = require('moment');

const isBirthday = function isBirthday(birthday) {
  return moment().isSame(birthday, 'day');
};

module.exports = isBirthday;
