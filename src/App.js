import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/Home/HomePage'
import NotFound from './pages/404/404'
import Resources from './pages/Resources/Resources'

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/resources' element={<Resources />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
