require('dotenv').config();
const express = require('express');
//Import des Cors
const cors = require('cors');
const path = require('path');

const router = require('./o-shop-back/routers');

const app = express();
app.use(cors({
   "origin": "*", //Options de cors
   "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
   "preflightContinue": false,
   "optionsSuccessStatus": 204
 }));

// Pour envoyer / recevoir les datas en JSON
app.use(express.json());
// Pas utiliser sur notre projet
app.use(express.static(path.join(__dirname, 'o-shop-back/public')));
// Pour recuperer les infos passes en body
app.use(express.urlencoded({ extended: true }));

app.use(router);



app.listen(process.env.PORT || 3500, () => {
   console.log('Server running on :', process.env.PORT);
});
