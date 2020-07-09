import moment, { Moment } from 'moment';

export const generateTallyDates = (): {
  startOfTally: Moment;
  endOfTally: Moment;
} => {
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
};

export const generateHoursTillCountdown = (): string => {
  const isAfterMidday: boolean = moment().hour() > 12;
  const hoursNumber: number = isAfterMidday ? (
    24 - (moment().hour() - 12)
  ) : (
    12 - moment().hour()
  );

  switch (hoursNumber) {
    case 1: return `1 hour`;
    case 0: return `24 hours`;
    default: return `${hoursNumber} hours`;
  }
};

export const formatRedditAccountabilityDate = (date: Date): string => {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2)
      month = '0' + month;
  if (day.length < 2)
      day = '0' + day;

  return [day, month, year].join('/');
}
