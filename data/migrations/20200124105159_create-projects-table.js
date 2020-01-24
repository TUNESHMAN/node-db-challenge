
exports.up = function(knex) {
    // create the resources table
    return knex.schema.createTable('fruits', table =>{
        table.increments() // This creates column named "id" which is the primary key.
    })
  
};

exports.down = function(knex) {
  
};
