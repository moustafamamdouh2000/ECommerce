import './App.css';
import Counter from './components/counter/Counter';
import About from './components/about/About';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import NavBar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
// import Signup from './components/signup/Signup';
import Signuphook from './components/signupHook/Signuphook';
function App() {
  return (
    <BrowserRouter>
      <HashRouter basename="/">
        <NavBar />
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/register" element={<Signuphook />} />
        </Routes>
      </HashRouter>
    </BrowserRouter>
  );
}

export default App;
