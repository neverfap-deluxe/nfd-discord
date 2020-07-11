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

const toISOTimezoneString = (date: Date): string => {
  var tzo = - date.getTimezoneOffset(),
      dif = tzo >= 0 ? '+' : '-',
      pad = function(num) {
        var norm = Math.floor(Math.abs(num));
        return (norm < 10 ? '0' : '') + norm;
      };
  return date.getFullYear() +
      '-' + pad(date.getMonth() + 1) +
      '-' + pad(date.getDate()) +
      'T' + pad(date.getHours()) +
      ':' + pad(date.getMinutes()) +
      ':' + pad(date.getSeconds()) +
      dif + pad(tzo / 60) +
      ':' + pad(tzo % 60);
}

export const toMelbourneDateString = (date: Date): string => {
  const aestTime = date.toLocaleString("en-US", {timeZone: "Australia/Melbourne"});
  const timeZoneDate = toISOTimezoneString(new Date(aestTime));

  return timeZoneDate;
}

const toISOTimezoneStringLogger = (date: Date): string => {
  var tzo = - date.getTimezoneOffset(),
      dif = tzo >= 0 ? '+' : '-',
      pad = function(num) {
        var norm = Math.floor(Math.abs(num));
        return (norm < 10 ? '0' : '') + norm;
      };
  return date.getFullYear() +
      '-' + pad(date.getMonth() + 1) +
      '-' + pad(date.getDate()) +
      ' ' + pad(date.getHours()) +
      ':' + pad(date.getMinutes()) +
      ':' + pad(date.getSeconds())
}

export const toMelbourneDateStringLogger = (date: Date): string => {
  const aestTime = date.toLocaleString("en-US", {timeZone: "Australia/Melbourne"});
  const timeZoneDate = toISOTimezoneStringLogger(new Date(aestTime));

  return timeZoneDate;
}
