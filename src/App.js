import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {

  const [category, setCategory] = useState('slides');


  return (
    <Router>
      <Navbar category={category} setCategory={setCategory}></Navbar>
      <Routes>
        <Route path='/' element={<Home category={category} setCategory={setCategory}></Home>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
