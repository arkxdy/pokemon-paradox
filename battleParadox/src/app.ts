import express from 'express';
import { Server as HttpServer } from 'http';
import { Server as SocketIOServer, Socket } from 'socket.io';

const app = express();
const httpServer = new HttpServer(app);
const io = new SocketIOServer(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  credentials: true,
  },
});

app.get('/', (req, res) => {
  res.send('WebSocket server is running');
});

io.on('connection', (socket: Socket) => {
    console.log('A user connected');

  socket.on('chatMessage', (msg: string) => {
    io.emit('chatMessage', msg);
  });

  socket.on('gameAction', (action: { type: string; payload: any }) => {
    io.emit('gameAction', action);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

export default httpServer;
