exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'rowValue1', Notes: "Music is good", ProjectID: 11, Completed: false, ResourceID: 11},
        {description: 'rowValue2', Notes: "I love coding", ProjectID: 11, Completed: false, ResourceID: 11},
        {description: 'rowValue3', Notes: "Music is good", ProjectID: 22, Completed: false, ResourceID: 22},
        {description: 'rowValue4', Notes: "React helps", ProjectID: 22, Completed: false, ResourceID: 22},
        {description: 'rowValue34', Notes: "JavaScript is interesting", ProjectID: 43, Completed: false, ResourceID: 43}
      ]);
    });
};