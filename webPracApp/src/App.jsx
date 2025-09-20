import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Anjula } from './Anjula';
import './App.css';
import Bashitha from './bashitha';
import Home from './Home';
import Nipuna from './nipuna';
import { Nirmal } from './Nirmal';
// import bashitha from './bashitha.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
     <Router>
      

      <Routes>
        <Route path="/bashitha" element={<Bashitha/>} />
        <Route path="/nipuna" element={<Nipuna/> }/>
        <Route path="/anjula" element={<Anjula/> }/>
        <Route path="/Nirmal" element={<Nirmal/> }/>
         <Route path="/" element={<Home/> }/>


      </Routes>
      
    </Router>
    

  )
}

export default App
