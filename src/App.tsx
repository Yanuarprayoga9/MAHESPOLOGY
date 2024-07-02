import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/home/Navbar';

function App() {
  return (
  
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
