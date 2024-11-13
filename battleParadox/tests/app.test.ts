// import request from 'supertest';
// import { io as Client, Socket } from 'socket.io-client';
// import { Server as SocketIOServer } from 'socket.io';
// import httpServer from '../src/app'; // Import the httpServer

// let io: SocketIOServer;
// let clientSocket: typeof Socket;
// let server: any;

// beforeAll((done) => {
//   // Start the server before all tests
//   server = httpServer.listen(3000, () => {
//     io = new SocketIOServer(server);
//     clientSocket = Client('http://localhost:3000');
//     clientSocket.on('connect', done); // Ensure connection is made
//   });
// });

// afterAll((done) => {
//   // Clean up after tests are done
//   io.close();
//   clientSocket.close();
//   server.close(done);
// });

// describe('WebSocket Server', () => {
//   it('should broadcast chat message to all connected clients', (done) => {
//     const message = 'Hello, World!';

//     clientSocket.on('chatMessage', (msg: string) => {
//       expect(msg).toBe(message);
//       done();
//     });

//     clientSocket.emit('chatMessage', message);
//   });

//   it('should broadcast game action to all connected clients', (done) => {
//     const action = { type: 'MOVE', payload: { x: 10, y: 20 } };

//     clientSocket.on('gameAction', (receivedAction: any) => {
//       expect(receivedAction).toEqual(action);
//       done();
//     });

//     clientSocket.emit('gameAction', action);
//   });
// });

// describe('HTTP Server', () => {
//   it('should return 200 for GET /', async () => {
//     const response = await request(server).get('/');
//     expect(response.status).toBe(200);
//     expect(response.text).toBe('WebSocket server is running');
//   });
// });
