import './shop.css';
import { useSelector, useDispatch } from 'react-redux';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState, useEffect } from 'react';
import { incrementCounter, decrementCounter } from '../../redux/counterSlice';
import { addItem } from '../../redux/cartSlice';
function Shop() {
  let randomKey = 0; // this is just for browser error for each element having unique key
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterReducer.counter);
  const [products, setProducts] = useState([]);
  const items = useSelector(state => state.cartReducer)
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const fetchProduct = (id) => {
    fetch('https://fakestoreapi.com/products/' + id)
      .then((res) => res.json())
      .then((json) => {
        dispatch(incrementCounter(1))
        dispatch(addItem(json));
        console.log(items);
      });
  };
  return (
    <div className="shop-card-groups row">
      <h2 style={{ "textAlign": "center" }}>welcome to the shop, add items to your cart !</h2>
      <div className='shop-container'>
        <CardGroup className="test">
          {products.map((product) => {
            return (
              <div key={randomKey++} className="product" >
                <div key={randomKey++} className="img">
                  <img
                    key={randomKey++}
                    className="im"
                    src={product.image}
                    alt="some product img"
                  />
                </div>
                <p key={randomKey++} className="title">
                  {product.title}
                </p>
                <p key={randomKey++} className="price">
                  {product.price} €
                </p>
                <button className='btn btn-primary' onClick={() => fetchProduct(product.id)}>Add</button>
              </div>
            );
          })}
        </CardGroup>
      </div>
    </div>
  );
}

export default Shop;
