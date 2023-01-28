import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Main } from './pages/main';
import { Login } from './pages/login';
import { Decode } from './pages/decode';
import { Encode } from './pages/encode';
import { Help } from './pages/help';
import { Navbar } from './components/navbar';
import { Feedback } from './pages/feedback';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/encode' element={ <Encode/> }/>
          <Route path='/decode' element={ <Decode/> } />
          <Route path='/feedback' element = {<Feedback />} />
          <Route path='/help' element={ <Help/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
