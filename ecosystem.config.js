module.exports = {
  apps: [
    {
      name: 'nodejs-template',
      script: 'src/server.js',
      autorestart: true,
      env: {
        NODE_ENV: 'prod',
        PORT: 7777,
      },
      env_dev: {
        NODE_ENV: 'prod',
        PORT: 7777,
      },
    }]
};
