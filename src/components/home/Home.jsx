import './home.css';
import Footer from '../contact/Footer'
import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux';
import { FormText } from 'react-bootstrap';
function Home() {
  const counter = useSelector((state) => state.counterReducer.counter);
  return (
    <div className='home-container'>
      <Carousel variant="dark" className='home-banners'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../../Assets/banner_img_01.jpg')}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Product 1</h3>
            {/* fetch most popular products or categories and display info about them here */}
            <p>some text about the product</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../../Assets/banner_img_02.jpg')}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Product 2</h3>
            <p>some text about the product</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../../Assets/banner_img_03.jpg')}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Product 3</h3>
            <p>
              some text about the product
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Footer></Footer>
    </div>
  );
}

export default Home;
