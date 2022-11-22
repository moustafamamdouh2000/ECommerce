import './App.css';
import Signin from './components/signin/Signin';
import About from './components/about/About';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import NavBar from './components/navbar/Navbar';
import Contact from './components/contact/Contact'
import Signuphook from './components/signupHook/Signuphook';
import Cart from './components/cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, HashRouter } from 'react-router-dom';
function App() {
  return (
    <HashRouter basename="/">
      <NavBar />
      <Routes>
        {/* <Route path="/counter" element={<Counter />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signuphook />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
