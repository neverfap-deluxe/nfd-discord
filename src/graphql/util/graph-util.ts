import moment from 'moment';

import knex from '../../util/knex';
import { collectionTypeToName } from './knex-util';

export const createGraphData = async (items, from, to, collection_type, graph_type) => {
  const reducedMessages = items.reduce((acc, message) => {
    for (const startPoint of acc.data) {
      const periodFromNow = moment(startPoint.x).add('1', 'day');

      if (moment(message.created_at).isBetween(startPoint.x, periodFromNow)) {
        const modifiedData = acc.data.map(point => moment(point.x).isSame(startPoint.x) ? (
          createPoint(point.x, point.y + 1)
        ) : (
          point
        ));
        return createGraphReducer(modifiedData, null);
      }
    }
    return createGraphReducer(acc.data, null);
  }, { data: createDatePeriods(from, to)});

  const dateFormat = Math.abs(from) > 9 ? (
    "DD"
  ) : (
    "DD-MM-YYYY"
  );

  const dataWithFormattedDates = reducedMessages.data.map(point => ({
    x: moment(point.x).format(dateFormat),
    y: point.y || 0,
  }));

  const metaData = {
    id: collectionTypeToName(collection_type),
    color: "hsl(111, 70%, 50%)",
  };

  switch(graph_type) {
    // TODO: I still need to figure this out. So, while it's accumulating now, it's not getting data in the past.
    case 'accumulative': {
      // NEED a function here to retrieve all previous data.
    const startOf2019 = moment().year(2019).startOf('year').format();
    const collection =
      await knex(collection_type)
        .whereBetween('created_at', [startOf2019, moment().add(from, 'days').toDate()])
        .count();

    const count = parseInt(collection[0].count as string);

    dataWithFormattedDates[0].y = dataWithFormattedDates[0].y + count;

    const reduceTotal = dataWithFormattedDates.reduce((acc, val) => ({
      dates: acc.dates.concat({...val, y: acc.dates.reduce((total, date) => date.y, 0) + val.y }),
    }), { dates: [] });

    return { ...metaData, data: reduceTotal.dates };
    }
    default: {
      return { ...metaData, data: dataWithFormattedDates };
    }
  }
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
