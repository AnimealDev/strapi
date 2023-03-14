module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', process.env.DBHOST),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', process.env.DBNAME),
      user: env('DATABASE_USERNAME', process.env.DBUSER),
      password: env('DATABASE_PASSWORD', process.env.DBPASS),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
