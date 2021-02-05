require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const router = require('./o-shop-back/routers');

const app = express();
app.use(cors({
   "origin": "*",
   "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
   "preflightContinue": false,
   "optionsSuccessStatus": 204
 }));


app.use(express.json());
app.use(express.static(path.join(__dirname, 'o-shop-back/public')));
app.use(express.urlencoded({ extended: true }));

app.use(router);

// create pipeline socket.io
const server = require('http').createServer(app);
const options = {
   origin: '*',
   methods: ["GET", "POST", "PATCH","DELETE","OPTIONS"],
   allowedHeaders: {"Access-Control-Allow-Headers": "Content-Type, Authorization",
   "Access-Control-Allow-Origin": '*',
   "Access-Control-Allow-Credentials": true},
   credentials: true
 };
const io = require('socket.io')(server,options);



io.on('connection', (socket) => {
   console.log('Client connected');
   app.set('socketio', io);
   socket.on('disconnect', () => console.log('Client disconnected'));
 });

 

 server.listen(process.env.PORT || 3500, () => {
   console.log('Server running on :', process.env.PORT);
});