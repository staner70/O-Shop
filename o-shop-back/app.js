require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./routers');

const app = express();


app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(router);



app.listen(process.env.PORT || 3500, () => {
   console.log('Server running on :', process.env.PORT);
});