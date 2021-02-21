const { Pool } = require('pg');
const { devDbConfig } = require('../config/db.config');

const pool = new Pool(devDbConfig);

const query = async (text, params) => {
  const res = await pool.query(text, params);
  return res;
};

module.exports = {
  query,
};
