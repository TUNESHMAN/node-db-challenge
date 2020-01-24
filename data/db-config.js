// This file has knowledge of knex. We bring in our configuration here.
const knex = require("knex");
const configuration = require("../knexfile").development;

module.exports = knex(configuration);
