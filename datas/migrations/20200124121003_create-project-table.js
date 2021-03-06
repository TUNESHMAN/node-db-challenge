exports.up = function(knex) {
  // / create the resources table
  return (
    knex.schema
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
          .text("Name")
          .unique()
          .notNullable();
        table.text("description");
        table.boolean("Completed").defaultTo(false);
      })
      // The tasks table comes here
      .createTable("tasks", tbl => {
        tbl.increments();
        tbl.text("description").notNullable();
        tbl.text("Notes");
        tbl.boolean("Completed").defaultTo(false);
        tbl
          .integer("ProjectID")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        tbl
          .integer("ResourceID")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resources")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      })
  );
};

exports.down = function(knex) {
  // Drop the resources table if it exists
  return knex.schema
  .dropTableIfExists("tasks")
  .dropTableIfExists("projects")
  .dropTableIfExists("resources");
};
