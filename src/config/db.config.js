const devDbConfig = {
  user: process.env.DB_USER || 'ashrene_roy',
  database: process.env.DB_NAME || 'todos_dev',
  password: process.env.DB_PASSWORD || '',
  port: process.env.DB_PASSWORD || 5432,
};

module.exports = {
  devDbConfig,
};
