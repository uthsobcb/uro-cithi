import React from 'react';
import { Routes, Route } from 'react-router-dom'
import SendMessage from './components/SendMessage';
import ShowMessages from './components/ShowMessages';
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SendMessage />}></Route>
        <Route path='/show' element={<ShowMessages />}></Route>
      </Routes>
    </>
  );
}

export default App;
