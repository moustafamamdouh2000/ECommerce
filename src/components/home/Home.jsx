import './home.css';
import Footer from '../contact/Footer'
import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux';
import { FormText } from 'react-bootstrap';
import { FaTruckMoving } from 'react-icons/fa'
import { IoMdRefresh } from 'react-icons/io'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
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
      <div className='return-items'>
        <div className='return-items-item'>
          <div className='return-items-truck truck-icon'>
            <FaTruckMoving />
          </div>
          <div className='return-hidden-icons truck-icon'>
            <FaTruckMoving />
            <h3 className='return-items-hidden-header'>Free Shipping</h3>
          </div>
          <h3 className='return-items-header'>Free Shipping</h3>
          <div className='return-items-text'><p>Get free shipping on new orders untill the end of the year !</p></div>
        </div>
        <div className='return-items-item'>
          <div className='return-items-truck refresh-icon'>
            <IoMdRefresh />
          </div>
          <div className='return-hidden-icons refresh-icon'>
            <IoMdRefresh />
            <h3 className='return-items-hidden-header'>Free Returns</h3>
          </div>
          <h3 className='return-items-header'>Free Returns</h3>
          <div className='return-items-text'><p>We guarantee a 14 days free return on newly purchased items !</p></div>
        </div>
        <div className='return-items-item'>
          <div className='return-items-truck question-icon'>
            <BsFillQuestionCircleFill />
          </div>
          <div className='return-hidden-icons question-icon'>
            <BsFillQuestionCircleFill />
            <h3 className='return-items-hidden-header'>Customer Support</h3>
          </div>
          <h3 className='return-items-header'>Customer Support</h3>
          <div className='return-items-text'><p>Talk to our customer support if you are facing any trouble at any time !</p></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
