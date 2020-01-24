// database access using knex
const db = require('../data/db-config');

function getAllProjects() {
  // i will use 'db' to do sql with JS
  // SELECT * FROM posts;
  // returns an array of records
  return db('project')
}

function getProjectById(id) {
  // SELECT * FROM posts WHERE id = id
  // resolves to an array of records
  return db('project').where({ id }).first()
}

function insertNewProject({ project_name, description }) {
  // INSERT INTO posts (title, contents)
  // VALUES (title, contents);
  return db('project').insert({ project_name, description})
}

function replaceProjectById({ id, project_name, description }) {
  // UPDATE posts SET title = title, contents = contents
  // WHERE id = id;
  return db('project').where({ id }).update({ project_name, description })
}

function deleteProjectById(id) {
  // DELETE FROM posts
  // WHERE id = id;
  return db('project').where({ id }).del()
}

module.exports = {
  getAllProjects,
  getProjectById,
  insertNewProject,
  replaceProjectById,
  deleteProjectById,
}
