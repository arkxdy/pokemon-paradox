import httpServer from '../src/app';  // Import the httpServer from your app.ts file
import { startServer } from '../src/index';  // Import the startServer function from index.ts

// Mocking httpServer.listen
jest.mock('../src/app', () => ({
  ...jest.requireActual('../src/app'),
  listen: jest.fn(),
}));

describe('Server Startup', () => {
  it('should call listen with the correct port', () => {
    const listenMock = httpServer.listen as jest.Mock; // Get the mock function

    // Call the startServer function to simulate starting the server
    startServer();

    // Check that listen was called with the correct port (3000)
    expect(listenMock).toHaveBeenCalledWith(4000, expect.any(Function));
  });
});
