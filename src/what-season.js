const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function getSeason(date) {
  if (date == undefined) return "Unable to determine the time of year!";
  date = date.getMonth();

  if (date >= 2 && date < 5) {
    return "spring";
  } else if (date >= 5 && date < 8) {
    return "summer";
  } else if (date >= 8 && date < 11) {
    return "autumn";
  } else if (date === 11 || date < 2) {
    return "winter";
  }
}

module.exports = {
  getSeason,
};
