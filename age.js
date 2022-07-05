`use strict`;

const now = new Date().getTime();
const birthday = Date.parse(`04 Apr 1994`);

exports.getAge = function () {
  return Math.trunc((now - birthday) / 1000 / 60 / 60 / 24 / 365);
};
