const express = require('express');
const router = express.Router();

const dataController = require('./app/controllers/dataController');

router.get('/', (request, response) => {
  response.status(200).send('Router funcionando!');
});

router.get('/getData', dataController.getClientData);




module.exports = router;
