module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'puig-solutions-test.ciwwtje0ylz9.us-east-1.rds.amazonaws.com'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'horarios_netlife_app'),
      user: env('DATABASE_USERNAME', 'gpuig'),
      password: env('DATABASE_PASSWORD', 'GpUiG_201197'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
