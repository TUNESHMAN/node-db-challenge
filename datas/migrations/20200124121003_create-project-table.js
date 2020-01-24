exports.up = function(knex) {
  // / create the resources table
  return knex.schema
    .createTable("resources", table => {
      table.increments(); // This creates column named "id" which is the primary key.
      table
        .text("resource_name")
        .unique()
        .notNullable();
      table.text("description");
    })
    // This is the projects table
    .createTable("projects", table => {
      table.increments();
      table
        .text("Name", 150)
        .unique()
        .notNullable();
      table.text("description");
      table.boolean("Completed").defaultTo(false);
    });
};

exports.down = function(knex) {
  // Drop the resources table if it exists
  return knex.schema.dropTableIfExist("resources");
};
