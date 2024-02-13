import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const PORT = 5000;

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: [
            'GET',
            'POST'
        ]
    }
});

io.on('connection', (socket) => {
    console.log(`User connected. ID: ${socket.id}`);

    socket.on('send_message', (response) => {
        socket.broadcast.emit('receive_message', response);
    });

    // socket.on('error_sending_message', (response) => {
    //     console.log(response.message);
    // });

    // socket.on('error_receiving_message', (response) => {
    //     console.log(response.message);
    // });
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
