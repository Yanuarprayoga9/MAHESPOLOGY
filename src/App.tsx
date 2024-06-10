import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import ExampleContent from './pages/example/ExampleContent';

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<ExampleContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
