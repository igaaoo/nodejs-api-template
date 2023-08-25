const oracledb = require('oracledb');
require('dotenv').config();

//Conexão ao banco de dados
async function connect() {
  try {
    var connection = await oracledb.getConnection({
      //Informações para conexão ao banco
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_SERVICE}`,
    });
  } catch (err) {
    return console.error(err.message);
  }

  return connection;
}

module.exports = {
  connect,
};
