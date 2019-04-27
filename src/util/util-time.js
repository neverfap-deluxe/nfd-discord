const moment = require('moment');

const generateTallyDates = () => {
  // TODO See if this is correct. I think it now is.
  const isAfterMiddayOrMidday = moment().hour() > 12;
  return isAfterMiddayOrMidday ? (
    {
      startOfTally: moment().endOf('day').subtract(12,'hours'),
      endOfTally: moment().endOf('day').add(12,'hours')
    }
  ) : (
    { 
      startOfTally: moment().startOf('day').subtract(12,'hours'),
      endOfTally: moment().startOf('day').add(12,'hours')
    }
  );
}

const generateHoursTillCountdown = () => {
  const isAfterMidday = moment().hour() > 12;
  const hoursNumber = isAfterMidday ? (
    24 - (moment().hour() - 12)
  ) : (
    12 - moment().hour()
  );

  switch(hoursNumber) {
    case 1: return `1 hour`;
    case 0: return `24 hours`;
    default: return `${hoursNumber} hours`;
  }
}

module.exports = {
  generateTallyDates,
  generateHoursTillCountdown
}