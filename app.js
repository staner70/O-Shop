require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const router = require('./o-shop-back/routers');

const app = express();
app.use(cors({
   "origin": "*",
   "methods": "GET,HEAD,PUT,PATCH,POST,DELETE"
 }));


app.use(express.json());
app.use(express.static(path.join(__dirname, 'o-shop-back/public')));
app.use(express.urlencoded({ extended: true }));

app.use(router);



app.listen(process.env.PORT || 3500, () => {
   console.log('Server running on :', process.env.PORT);
});
