const io = require('socket.io');
const updateProduct = require('../../controllers/productController');

class serverSocket {
    constructor(server) {
        this.socketServer = io(server);
        this.setEvents();
    }


    setEvents() {
        this.socketServer.on('connection', socket => {
            console.log('Un client s\'est connecté au socketServer');

            socket.emit('welcome', 'Bienvenue sur Eshop_api');
        })
    }
   
}




module.exports = serverSocket;