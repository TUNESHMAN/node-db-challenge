exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        {Name: 'Write code', description: "Helps you stay current", Completed: true},
        {Name: 'Give a speech', description: "For effective communication", Completed: false},
        {Name: 'Download an app', description: "We need it for the transfer of materials", Completed: false},
        {Name: 'Do some designs', Completed: false}
      ]);
    });
};