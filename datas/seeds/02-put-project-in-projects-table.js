exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        {Name: 'Write code', description: 'Helps you stay current', Completed: true},
        {Name: 'Give a speech', Completed: false},
        {Name: 'Mine Bitumen', Description: 'Used to san disk 03', Completed: false},
        {Name: 'X-Force Down', Description: 'Used to board card 04', Completed: false}
      ]);
    });
};