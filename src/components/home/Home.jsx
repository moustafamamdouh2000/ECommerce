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
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../../Assets/banner_img_02.jpg')}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../../Assets/banner_img_03.jpg')}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Footer></Footer>
    </div>
  );
}

export default Home;
