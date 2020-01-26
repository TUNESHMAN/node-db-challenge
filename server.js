const express = require('express');

const ProjectRouter = require('./project/project-router');

const server = express();

server.use(express.json());

server.use('/api/project', ProjectRouter);

server.get('/', (req, res) => {
  res.send('<h3>DB Helpers with knex</h3>');
});

module.exports = server;