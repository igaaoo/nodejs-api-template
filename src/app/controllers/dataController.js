const dataModel = require('../models/dataModel');
const dotenv = require('dotenv');
dotenv.config();



function validateString(str) {
  const regexNumbersAndLetters = /^[a-zA-Z0-9 ]{1,100}$/;
  return regexNumbersAndLetters.test(str);
}



const getClientData = async (request, response) => {
  const { client, token } = request.body;


  if (token == process.env.TOKEN) {
    if (!validateString(client)) return response.status(400).json({ error: 'Código de client inválido, inserir apenas números, até 14 dígitos!' });

    try {

      var result = await dataModel.getData(client);

      if (result.length == 0) return response.status(404).json({ error: 'Cliente não encontrado!' });


      return response.status(200).json({ data: result });
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  } else {
    return response.status(401).json({ error: 'Token inválido!' });
  }
};

module.exports = {
  getClientData
};