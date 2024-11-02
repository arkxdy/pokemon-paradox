// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import App from '../App';

// test('renders Vite + React', () => {
//   render(<App />);
//   const heading = screen.getByText(/Vite \+ React/i);
//   expect(heading).toBeInTheDocument();
// });

// test('increments count on button click', () => {
//   render(<App />);
//   const button = screen.getByText(/count is 0/i);
//   expect(button).toBeInTheDocument();
  
//   fireEvent.click(button);
//   expect(button).toHaveTextContent('count is 1');
// });

// test('renders logos with correct links', () => {
//   render(<App />);
//   const viteLink = screen.getByRole('link', { name: /Vite logo/i });
//   const reactLink = screen.getByRole('link', { name: /React logo/i });
  
//   expect(viteLink).toHaveAttribute('href', 'https://vitejs.dev');
//   expect(reactLink).toHaveAttribute('href', 'https://react.dev');
// });
// App.test.js
import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'
import { ProviderProps } from '@app/type'
import Home from '@app/pages/Home/Home'

// Mock the AuthProvider and AppRoutes components if needed
// jest.mock('./context/AuthContext', () => ({
//   AuthProvider: ({ children }: ProviderProps) => <div>{children}</div>,
// }))

//jest.mock('./routes/AppRoutes', () => () => <Home/>)

// describe('App component', () => {
//   test('renders AppRoutes within AuthProvider', () => {
//     render(<App />)

//     // Check if the AppRoutes component is rendered
//     //const appRoutesElement = screen.getByText(/App Routes Component/i)
//     //expect(appRoutesElement).toBeTruthy()
//   })
// })
