import './home.css';
import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux';
function Home() {
  const counter = useSelector((state) => state.counterReducer.counter);
  return (
    <div className='home-container'>
      <Carousel className='home-banners'>
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
      <div className="footer" style={{ textAlign: 'center', fontSize: '2rem', paddingTop: '2rem' }}>
        <p>
          Buy me a Coffee <br />
          {/* {counter} $ donated so far ! */}
        </p>
      </div>
    </div>
  );
}

export default Home;
