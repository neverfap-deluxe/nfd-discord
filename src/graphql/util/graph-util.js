const moment = require('moment')

const createGraphData = (items, from, to, collection_type) => {
  const reducedMessages = items.reduce((acc, message) => {
    for (const startPoint of acc.data) {
      const periodFromNow = moment(startPoint.x).add('1', 'day');

      if (moment(message.created_at).isBetween(startPoint.x, periodFromNow)) {
        const modifiedData = acc.data.map(point => moment(point.x).isSame(startPoint.x) ? (
          createPoint(point.x, point.y + 1)
        ) : (
          point
        ));
        return createGraphReducer(modifiedData);
      }  
    } 
    return createGraphReducer(acc.data);
  }, { data: createDatePeriods(from, to)});
  
  const dateFormat = Math.abs(from) < 8 ? (
    "DD-MM-YYYY"
  ) : (
    "DD-MM"
  );

  const dataWithFormattedDates = reducedMessages.data.map(point => ({
    x: moment(point.x).format(dateFormat),
    y: point.y || 0,
  }));

  return {
    id: collection_type,
    color: "hsl(111, 70%, 50%)",
    data: dataWithFormattedDates,
  };
}

const createDatePeriods = (from, to) => {
  const startPeriod = moment().add(from, 'days');
  const endPeriod = moment().add(to, 'days');
  
  let nextPeriod = moment(startPeriod).add(1, 'day');
  let dataArray = [createPoint(startPeriod, 0)];
  while (moment(nextPeriod).isBefore(endPeriod)) {
    dataArray.push(createPoint(nextPeriod, 0));
    nextPeriod = moment(nextPeriod).add(1, 'day');
  }
  return dataArray;
}


const createPoint = (x, y) => ({
  x,
  y, 
});

const createGraphReducer = (data, datePeriods) => ({
  data,
  datePeriods,
});


module.exports = {
  createGraphData,
}