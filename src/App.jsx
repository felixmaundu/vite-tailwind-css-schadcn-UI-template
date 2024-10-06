// App.js
// import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/mainPage';
import RegistrationPage from './pages/registration';
import EventProgram from './pages/eventProgram';


function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<MainPage />} /> */}
        {/* <Route path="/RegistrationPage" element={<RegistrationPage />} /> */}
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/EventProgram" element={<EventProgram />} />
      </Routes>
    </div>
  );
}

export default App;
