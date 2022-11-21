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
      .then((json) =>{
        console.log(json)
        dispatch(incrementCounter(1));
        console.log(counter);
      });
  };
  return (
    <CardGroup className="test">
      {products.map((product) => {
        return (
          <div key={randomKey++} className="product" onClick={() => fetchProduct(product.id)}>
            <div key={randomKey++} className="img">
              <img
                key={randomKey++}
                className="im"
                src={'data:image/png;base64,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'}
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
  );
}

export default Shop;
