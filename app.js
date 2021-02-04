require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const router = require('./o-shop-back/routers');

const app = express();

// create pipeline socket.io
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.set('socketio', io);


app.use(cors("*"));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'o-shop-back/public')));
app.use(express.urlencoded({ extended: true }))
app.use(router);



io.on('connection', (socket) => {
   console.log(`Client connected', ${socket.id}`);
   socket.on('disconnect', () => console.log('Client disconnected'));
 });


http.listen(process.env.PORT || 3500, () => {
   console.log('Server running on :', process.env.PORT);
});