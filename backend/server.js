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
        origin: 'https://socket-chat-virid.vercel.app/',
        methods: [
            'GET',
            'POST'
        ]
    }
});

io.on('connection', (socket) => {
    socket.on('send_message', (response) => {
        socket.to(response.room).emit('receive_message', response);
    });

    socket.on('join_room', (response) => {
        socket.join(response);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
