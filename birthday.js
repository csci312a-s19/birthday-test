const moment = require('moment');

const isBirthday = function (birthday) {
  return moment().isSame(birthday, 'day');
};

module.exports = isBirthday;
