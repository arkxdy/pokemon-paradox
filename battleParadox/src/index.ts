// src/index.ts
import httpServer from './app';

const PORT = 3000;

// Start the server and listen on a specific port
export const startServer = () => {
  httpServer.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer();  // Call this to start the server
