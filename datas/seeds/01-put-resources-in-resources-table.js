exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources')
    .truncate()
    .then(function() {
      // Inserts resources seed entries
      return knex('resources').insert([
        { resource_name: "Television", description: "Helps you stay current" },
        {
          resource_name: "Mobile phone",
          description: "For effective communication"
        },
        {
          resource_name: "Delivery Van",
          description: "We need it for the transfer of materials"
        },
        { resource_name: "Microphone" }
      ]);
    });
};
