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
  const items = {
    "id": 3,
    "title": "Rustic Metal Bike",
    "price": 42,
    "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    "category": {
      "id": 3,
      "name": "Furniture",
      "image": "https://api.lorem.space/image/furniture?w=640&h=480&r=5963"
    },
    "images": [
      "https://api.lorem.space/image/furniture?w=640&h=480&r=7110",
      "https://api.lorem.space/image/furniture?w=640&h=480&r=5961",
      "https://api.lorem.space/image/furniture?w=640&h=480&r=4468"
    ]
  }
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
        <Route path="/cart" element={<Cart items={items} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
