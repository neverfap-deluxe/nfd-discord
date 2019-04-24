const moment = require('moment')

const createGraphData = (items, from, to) => {
  const reducedMessages = items.reduce((acc, message) => {
    const startPeriod = acc.fromMoment;
    const periodFromNow = acc.fromMoment.add('1', 'days');

    const incrementedAccTally = acc.totalTally + 1;
    const neutraliseTally = 0;

    // if the message.created_at date is within a day
    if (moment(message.created_at).isBetween(startPeriod, periodFromNow)) {
      const doesDayExist = acc.data.find(point => point.x === acc.fromMoment);

      // if message exists in list, add modify it
      if (doesDayExist) {
        const modifiedData = acc.data.map(point => point.x === acc.fromMoment ? (
          createPoint(point.x, incrementedAccTally)
        ) : (
          point
        ));
        return createGraphReducer(modifiedData, startPeriod, incrementedAccTally);
      } else {
        // If day not exist, add it and increment
        const newDate = createPoint(startPeriod, incrementedAccTally)
        const withNewData = acc.data.concat(newDate) 
        return createGraphReducer(withNewData, startPeriod, incrementedAccTally);
      }
    }

    return createGraphReducer(acc.data, periodFromNow, neutraliseTally);
  }, { data: [], fromMoment: moment(from), totalTally: 0, });
  
  return { 
    id: "accountabilityMessages",
    color: "hsl(111, 70%, 50%)",
    data: reducedMessages.data,
  };
}

const createPoint = (x, y) => ({
  x,
  y, 
});

const createGraphReducer = (data, fromMoment, totalTally) => ({
  data,
  fromMoment,
  totalTally,
});


module.exports = {
  createGraphData,
}