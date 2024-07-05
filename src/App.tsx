import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/_Shared/Navbar';
import Materi from './pages/materi/Materi';
import TentangKami from './pages/tantang kami/TentangKami';
import NotFound from './components/_Shared/NotFound';

function App() {
  return (
  
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materi" element={<Materi/>} />
        <Route path="/tentangkami" element={<TentangKami/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
