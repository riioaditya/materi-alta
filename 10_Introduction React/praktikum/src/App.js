import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/Contact_us';

function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact_us' element={<ContactUs />} />
        </Routes>    
    </BrowserRouter>
);
  
}

export default App;
