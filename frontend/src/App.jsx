import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import NotFoundPage from './pages/NotFoundPage';
import ChatPage from './pages/СhatPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<ChatPage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
