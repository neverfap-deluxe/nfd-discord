
exports.up = async function(knex, Promise) {
  return knex.schema.table('accountability_messages', function(table) {
    table.string('username');
  });
};

exports.down = function(knex, Promise) {
  
};
