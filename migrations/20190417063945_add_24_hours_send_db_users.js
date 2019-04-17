
exports.up = function(knex, Promise) {
  return knex.schema.table('db_users', function(table) {
    table.boolean('sentYesterdayPostMessage');
  });
};

exports.down = function(knex, Promise) {
  
};
