import './App.css';
import Home from './Screen/Home';
import Moves from './Screen/Moves';

import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/moves' element={<Moves/>}/>
      </Routes>
    </div>
  );
}

export default App;
