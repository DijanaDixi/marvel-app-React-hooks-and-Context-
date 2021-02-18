/* eslint-disable no-unused-vars */
import React from 'react'
import HomePage from './components/HomePage/HomePage';
import MarvelContextProvider from './contexts/marvelContext';


function App() {
  return (
      <>
      <MarvelContextProvider>
      <HomePage/>
      </MarvelContextProvider>
     
      </>
  );
}

export default App;
