import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsCart } from 'react-icons/bs';
function NavBar() {
  const cart_counter = useSelector((state) => state.counterReducer.counter)
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar" variant="dark">
      <Container>
        <Navbar.Brand href="/home#/home"> <a className="brand" href="/home#/home">E-Commerce</a></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navy">
            <Link className="item" to="/home">
              Home
            </Link>
            <Link className="item" to="/about">
              About
            </Link>
            {/* <Link className="item" to="/counter">
              Counter
            </Link> */}
            <Link className="item" to="/shop">
              Shop
            </Link>
            <Link className="item" to="/register">
              Sign Up
            </Link>
          </Nav>
          {/* add cart icon */}
          <div className='cart-info'>
            <BsCart className='icon' />
            <p>{cart_counter}</p>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
