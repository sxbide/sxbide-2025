import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/Home/HomePage'

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path='*' element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
