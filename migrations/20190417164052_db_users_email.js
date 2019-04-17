
exports.up = async function(knex, Promise) {
  return knex.schema.table('db_users', function(table) {
    table.string('email');
  });
};

exports.down = function(knex, Promise) {
  
};
