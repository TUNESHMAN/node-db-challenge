// database access using knex
const db = require('../data/db-config.js');

function getAllProjects() {
  // i will use 'db' to do sql with JS
  // SELECT * FROM posts;
  // returns an array of records
  return db('projects')
}

function getProjectById(id) {
  // SELECT * FROM posts WHERE id = id
  // resolves to an array of records
  return db('projects').where({ id }).first()
}

function insertNewProject({ Name, description }) {
  // INSERT INTO posts (title, contents)
  // VALUES (title, contents);
  return db('projects').insert({ Name, description })
}

function replaceProjectById({ id, Name, description }) {
  // UPDATE posts SET title = title, contents = contents
  // WHERE id = id;
  return db('projects').where({ id }).update({ Name, description })
}

function deleteProjectById(id) {
  // DELETE FROM posts
  // WHERE id = id;
  return db('projects').where({ id }).del()
}

module.exports = {
  getAllProjects,
  getProjectById,
  insertNewProject,
  replaceProjectById,
  deleteProjectById,
}
