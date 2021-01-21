# Getting Started 

## Create Node.js App

    we initialize the Node.js App with a package.json file:
    we install necessary modules: express, cors, pg, dotenv, jsonwebtoken and bcryptjs.

``` js

npm init -y
npm i express pg cors  dotenv jsonwebtoken bcryptjs 
```

## Setup Express web server

In the root folder, we created a new app.js file like this :

``` js
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
```

