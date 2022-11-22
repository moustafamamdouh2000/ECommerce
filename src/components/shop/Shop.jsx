import './shop.css';
import { useSelector, useDispatch } from 'react-redux';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState, useEffect } from 'react';
import { incrementCounter, decrementCounter } from '../../redux/counterSlice';
function Shop() {
  let randomKey = 0; // this is just for browser error for each element having unique key
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterReducer.counter);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  const fetchProduct = (id) => {
    fetch('https://api.escuelajs.co/api/v1/products/' + id)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        dispatch(incrementCounter(1));
        console.log(counter);
      });
  };
  return (
    <div className="shop-card-groups row">
      <div className='col-2' style={{ "overflow-wrap": "break-word" }}>
        <h1 className='shop-header'>Categories</h1>
      </div>
      <div className='col-10'>
        <CardGroup className="test">
          {products.map((product) => {
            return (
              <div key={randomKey++} className="product" onClick={() => fetchProduct(product.id)}>
                <div key={randomKey++} className="img">
                  <img
                    key={randomKey++}
                    className="im"
                    src={require('../../Assets/Headset.jpg')}
                    alt="some product img"
                  />
                </div>
                <p key={randomKey++} className="title">
                  {product.title}
                </p>
                <p key={randomKey++} className="price">
                  {product.price} EGP
                </p>
              </div>
            );
          })}
        </CardGroup>
      </div>
    </div>
  );
}

export default Shop;
