import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Crew from './pages/Crew';
import Destination from './pages/Destination';
import Home from './pages/Home';
import Technology from './pages/Technology';


const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='crew' element={<Crew/>}/>
        <Route path='destination' element={<Destination/>}/>
        <Route path='technology' element={<Technology/>}/>
      </Routes>
    </div>
  );
};

export default App;
