exports.up = function(knex) {
  // / create the resources table
  return knex.schema.createTable("resources", table => {
    table.increments(); // This creates column named "id" which is the primary key.
    table
      .text("resource_name")
      .unique()
      .notNullable();
    table.text("description");
  });
};

exports.down = function(knex) {
  // Drop the resources table if it exists
  return knex.schema.dropTableIfExist("resources");
};
