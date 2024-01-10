import logo from './logo.svg';
import './App.css';
import Sign from './pages/login/Sign';
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact';
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Nothing from './pages/Nothing/Nothing';
import Profile from './pages/profile/Profile';
import { Toaster } from 'react-hot-toast';

function App() {
  const [user, setUser] = useState();
  return (
    <div className="App">
      <Navbar user={user}/>
      <Routes>
        <Route path="/" element={<Sign setUser={setUser}/>} />
        <Route path="/Sign" element={<Sign setUser={setUser}/>} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/profile" element={<Profile setUser={setUser} />} />
        
        <Route path="*" element={<Nothing />} />
      </Routes>
      <Toaster position="top-center"/>
    </div>
  );
}

export default App;
