const oracledb = require('oracledb');
require('dotenv').config();

//Checa conexão ao banco de dados
async function checkConnection() {
  try {
    var connection = await oracledb.getConnection({
      //Informações para conexão ao banco
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_SERVICE}`,
    });
    console.log('Connection success');
  } catch (err) {
    console.error(err.message);
  } finally {
    if (connection) {
      try {
        //Fecha conexões !IMPORTANTE!
        await connection.close();
        console.log('close connection success');
      } catch (err) {
        console.error(err.message);
      }
    }
  }
}

checkConnection();
