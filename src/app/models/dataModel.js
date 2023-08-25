const db = require('../../database/connection');


async function getData(client) {
  try {
    var connection = await db.connect();


    var binds = [client]; // Anti-SQL Injection
    var result = await connection.execute(
      'SELECT * FROM table WHERE client = :client',
      binds
    );

  } catch (err) {
    return err;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err.message);
      }
    }

  }

  return result.rows;
}

module.exports = {
  getData
};