
exports.up = async function(knex, Promise) {
  return knex.schema.table('accountability_tally', function(table) {
    table.integer('total_participants');
    table.integer('total_reacts');
  });

};

exports.down = function(knex, Promise) {
  
};
