// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./datas/project.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./datas/migrations"
    },
    seeds: {
      directory: "./datas/seeds"
    }
  }
};
