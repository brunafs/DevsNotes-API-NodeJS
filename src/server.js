require('dotenv').config();   //carregar .env
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();  //criar servidor
server.use(cors());        //requisitar api de qualquer dispositivo
server.use(bodyParser.urlencoded({extended: false})); //ajustar dados

server.get('/ping', (req, res)=>{
   res.json({pong: true});
});

server.listen(process.env.PORT, () => {
   console.log(`Servidor rodabndo em: http://localhost:${process.env.PORT}`);
});